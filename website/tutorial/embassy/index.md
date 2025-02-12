---
sidebar_position: 2
slug: /tutorials/embassy
description: How to install the prerequisites for embassy-rs
---

# Embassy-rs Setup

Here, we will cover the steps needed in order to be able to compile and flash Rust applications for **RP2040**, the MCU (Microcontroller Unit) found in our **Raspberry Pi Pico W**s.

## Prerequisites

### Rust Toolchain

In order to install the tools needed to compile Rust code, follow the next steps, depending on your operating system.

#### Linux

Run the this command in terminal:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

This downloads and runs `rustup-init.sh`, which in turn downloads and runs the correct version of the `rustup-init` executable for your platform.


#### Windows

Download the respective executable:

* [RUSTUP-INIT.exe - 64bit](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)
* [RUSTUP-INIT.exe - 32bit](https://static.rust-lang.org/rustup/dist/i686-pc-windows-msvc/rustup-init.exe)

:::note
You may be prompted to install [Visual Studio C++ Build tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/). If so, follow the instructions from the previous link.
:::

The last step is to run `rustup --version` in terminal. If everything went well, you should see an output similar to this:

```shell
rustup 1.27.1 (54dd3d00f 2024-04-24)
info: This is the version for the rustup toolchain manager, not the rustc compiler.
info: The currently active `rustc` version is `rustc 1.83.0 (90b35a623 2024-11-26)`
```

### `elf2uf2-rs`

This tool is needed to be able to program the board over USB. In order to install it, run the following in your terminal:

```shell
cargo install elf2uf2-rs
```

Then, run `elf2uf2-rs --help`. If it was correctly installed, you should see something similar to this in your terminal:

```shell
Usage: elf2uf2-rs [OPTIONS] <INPUT> [OUTPUT]

Arguments:
  <INPUT>   Input file
  [OUTPUT]  Output file

Options:
  -v, --verbose  Verbose
  -d, --deploy   Deploy to any connected pico
  -s, --serial   Connect to serial after deploy
  -h, --help     Print help
```

### `probe-rs`

This tool is an embedded debugging and target interaction toolkit. It enables its user to program and debug microcontrollers via a debug probe.

:::info 

Before installing probe-rs, you need to install  `pkg-config`, `libudev`, `cmake` and `git`. You can get them by running the following in your terminal. If any of these programs are already installed on your machine, you can omit them from the command.
```shell
sudo apt-get install pkg-config libudev-dev cmake git
```

:::

```shell
cargo install probe-rs-tools --locked
```

If you are on **Linux** you will also need to add this [`udev`](https://probe.rs/files/69-probe-rs.rules) file in `/etc/udev/rules.d`. Then, run:

```shell
udevadm control --reload # to ensure the new rules are used.

udevadm trigger # to ensure the new rules are applied to already added devices.
```

### VSCode Extension

For a better experience, go ahead and install the **Debugger for probe-rs** extension in the Microsoft Extension Marketplace. This will allow us to build and upload a program to the RP2040 directly from VSCode and it will make debugging the program while running on the MCU as easy as debugging a Rust program running on your host machine.

## Flashing over USB

### Compiling

You will need to compile your executable specifically for the RP2040 chip. This chip is based on the **ARM Cortex M0+** architecture, so we will need to specify our target when compiling. We can do that in multiple ways:

* using a `.cargo/config.toml` file:

```toml
[build]
target = "thumbv6m-none-eabi"
```

* passing it as a parameter to Cargo:

```shell
cargo build --release --target thumbv6m-none-eabi
```

:::info

You can also use `build` without the `--release` option. This way, the rust compiler will not apply any optimisations to your code and a `debug` build will be generated. 

:::

### Flashing

To flash a program to the Raspberry Pi Pico via USB, it needs to be in *USB mass storage device mode*. To put it in this mode, you need to **hold the `BOOTSEL` button down**  while connecting it to your PC. Connecting and disconnecting the USB can lead to the port getting damaged, so we conveniently attached a reset button on the breadboard included on the **Pico Explorer Base**. Now, to make it reflashable again, just press the two buttons simultaneously.

After connecting the board to your PC and compiling the program, locate the binary in the `target/thumbv6m-none-eabi/release/` (or `target/thumbv6m-none-eabi/debug/` if you didn't use the `--release` option) folder. There are a few ways to flash the binary to the board:

#### 1. Using `elf2uf2-rs`:

Run this command:

```shell
elf2uf2-rs -d -s /path/to/your/binary
```

* `-d` to automatically deploy to a mounted pico
* `-s` to open the pico as a serial device after deploy and print serial output
  
:::note
On `Windows`, you may need to run this command in a terminal that has **Admin Privileges**.
:::

#### 2. Using `probe-rs`:

You can run

```shell
probe-rs run --chip RP2040 --protocol swd --speed 16000 /path/to/your/binary
```

This will flash the board without starting `probe-rs`' debugging functionality.

#### 3. Configuring `cargo run` to do it

If you've already created a `.cargo/config.toml` with a build target, you can add these lines to the file:

```toml
[target.'cfg(all(target_arch = "arm", target_os = "none"))']
runner = "probe-rs run --chip RP2040 --protocol swd --speed 16000"
```

Now, `cargo run` will automatically call the command from option 2, without having to specify the path to the binary.

:::note
As it will be required later in the tutorial, you should also add

```toml
[env]
DEFMT_LOG = "debug"
```

which tells cargo that your program will use **deferred formatting** to more efficiently send logs to the host machine via a serial interface. You can learn more about `defmt` [here](https://defmt.ferrous-systems.com/).
:::

#### 4. Using the **Debugger for probe-rs** extension

This method can be used from VSCode's **Run and Debug** view. The binary will be flashed to the board by `probe-rs` and the debugging mode will be running by default. However, this option requires further configuration of the project which will be detailed in the next section of this tutorial. 

## Debugging using Raspberry Pi Debug Probe

In order to be able to debug the program running on the board, we will need to connect the **Raspberry Pi Debug Probe** to our **Raspberry Pi Pico W**. Below, you have a picture of the debug kit provided:

![Raspberry Pi Debug probe](assets/the-probe.png)

To connect them, we will use the **3-pin debug to 0.1-inch header (female)** cable. First, carefully insert the **3-pin debug** head in the **right side** connector (marked D). Then you will also need to connect it to the Raspberry Pi Pico W. You will find attached the pinout, take a closer look at the bottom of the image:

![Raspberry Pi Pico W pinout](assets/picow-pinout.svg)

The connections must be:

| Wire | Raspberry Pi Pico W |
|-|-|
|TX (Orange)|SWCLK|
|GND (Black)|GND|
|RX (Yellow)|SWDIO|

:::warning
Do not forget to connect both the Debug Probe and Pico to your PC.
:::

The simplest way to start debugging is to use the **Run and Debug** view in Visual Studio Code. First, you will need to create a `.vscode/launch.json`. VSCode will give you the option to create one when entering the **Run and Debug** menu:

![Run and Debug menu](assets/run_and_debug.png)

Here is an example of such a file:

##### launch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "preLaunchTask": "rust: cargo build",
            "type": "probe-rs-debug",
            "request": "launch",
            "name": "launch request",
            "cwd": "${workspaceFolder}",
            "chip": "RP2040",
            // RP2040 doesn't support connectUnderReset
            "connectUnderReset": false,
            "speed": 4000,
            "runtimeExecutable": "probe-rs",
            "runtimeArgs": [
                "dap-server"
            ],
            "flashingConfig": {
                "flashingEnabled": true,
                "haltAfterReset": false,
            },
            "coreConfigs": [
                {
                    "coreIndex": 0,
                    "programBinary": "target/thumbv6m-none-eabi/debug/test_rp",
                    // Comment this line if the svd file is not present
                    "svdFile": "./.vscode/rp2040.svd",
                    "rttEnabled": true,
                    "options": {
                        "env": {
                            "DEFMT_LOG": "debug"
                        }
                    },
                }
            ],
            "consoleLogLevel": "Info", //Error, Warn, Info, Debug, Trace
            "wireProtocol": "Swd"
        }
    ]
}
```

You can find out more about this configuration file and available options, as well as the debugging process itself from the official [probe-rs documentation](https://probe.rs/docs/tools/debugger/).

A recommended step is to download the `rp2040.svd` [file](https://raw.githubusercontent.com/raspberrypi/pico-sdk/1.3.1/src/rp2040/hardware_regs/rp2040.svd) and place it in the `.vscode/` directory, as it gives `probe-rs` and VSCode additional information on the registers and memory regions used by the MCU. If you aren't using this file, the `"svdFile"` attribute should be commented out or removed from `launch.json`.

## Building your first Embassy-rs project

In this section, we will briefly go over the steps you need to take in order to get your first project using **Rust** and **Embassy-rs** going.

### Creating your crate

The first step is to create your cargo package by running the following command in your terminal:

```shell
cargo new --vcs none embassy
```

* `--vcs none` because at the moment we do not want to use any code versioning (they are useful, but this is not the purpose of this tutorial)

### Crate settings

Because we are running in an embedded environment, our code needs to be *"tailored"* specifically for the microcontroller we intend to use. In our case, it is the **RP2040**, but these general steps apply for any chip, produced by any manufacturer.

#### No standard library

Due to the size constraints imposed on us (in our case, `2MB` of flash memory), the standard library has to go. We specify that by adding the `#![no_std]` attribute to the beginning of our `src/mains.rs` file.

#### No `main` function

Because we are using the **Embassy-rs** framework, we want to let it take care of the entry point of our program (because it has to do some complex operations, like allocating the `task-arena` and `executor` structures). For the moment, all we will need to do is add the `#![no_main]` attribute to `src/main.rs`.

#### Toolchain setting

Our chip is a **Cortex-M0+** that uses the **ThumbV6-M** architecture so we will need to specify the target triple we are compiling for. We will do that using a `rust-toolchain.toml` file, as it allows us to also set the **toolchain release channel** we will use, and the components we require.

An example of such file is this:

##### rust-toolchain.toml

```Toml
# This file is used to specify the version of the Rust toolchain that 
# should be used for your project.

[toolchain]
# The release to be used.
channel = "1.83"
# The targets for compilation that need to be added. This is used for 
# cross-compilation, as the executables we are producing need to be
# run on our boards.
targets = ["thumbv6m-none-eabi"]
# The additional componets to be installed along the Rust toolchain
components = ["rust-src", "rustfmt", "llvm-tools", "clippy"]
```

:::tip

Please make sure that you install the Rust ARMv6-M target (thumbv6m-none-eabi).

```bash
rustup target add thumbv6m-none-eabi
```

:::

#### Memory layout

We also need to take care of the memory layout of our program when writing code for a microcontroller. These can be found in the datasheet of all the microcontrollers. Bellow, you can find the memory layout for the **RP2040**:

##### `memory.x`

```linker-script
/* Memory regions for the linker script */
/* Address map provided by datasheet: https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf */
MEMORY {
    /* Define the memory region for the second stage bootloader */
    BOOT2 : ORIGIN = 0x10000000, LENGTH = 0x100

    /* Define the memory region for the application to be loaded next */
    FLASH : ORIGIN = 0x10000100, LENGTH = 2048K - 0x100

    /* Define the memory region for SRAM */
    RAM   : ORIGIN = 0x20000000, LENGTH = 264K
}
```

To use the `memory.x` layout file, we will also need to use a build script. Rust facilitates that through the `build.rs` file. Bellow you will find an explained build script you can use.

##### `build.rs`

```rust
//! This build script copies the `memory.x` file from the crate root into
//! a directory where the linker can always find it at build time.
//! For many projects this is optional, as the linker always searches the
//! project root directory -- wherever `Cargo.toml` is. However, if you
//! are using a workspace or have a more complicated build setup, this
//! build script becomes required. Additionally, by requesting that
//! Cargo re-run the build script whenever `memory.x` is changed,
//! updating `memory.x` ensures a rebuild of the application with the
//! new memory settings.

use std::env;
use std::fs::File;
use std::io::Write;
use std::path::PathBuf;

fn main() {
    // Put `memory.x` in our output directory and ensure it's
    // on the linker search path.
    let out = &PathBuf::from(env::var_os("OUT_DIR").unwrap());
    File::create(out.join("memory.x"))
        .unwrap()
        .write_all(include_bytes!("./memory.x"))
        .unwrap();
    println!("cargo:rustc-link-search={}", out.display());
    println!("cargo:rerun-if-changed={{layout}}");

    // `--nmagic` is required if memory section addresses are not aligned to 0x10000,
    // for example the FLASH and RAM sections in your `memory.x`.
    println!("cargo:rustc-link-arg=--nmagic");

    // The `link.x` linker script provided by `cortex_m_rt` (minimal runtime for
    // Cortex-M microcontrollers used by embassy) will include our `memory.x` memory layout.
    println!("cargo:rustc-link-arg=-Tlink.x");

    // The `link-rp.x` linker script provided by `embassy_rp` that defines the
    // BOOT2 section.
    println!("cargo:rustc-link-arg-bins=-Tlink-rp.x");

    // The `defmt.x` linker script provided by `defmt`.
    println!("cargo:rustc-link-arg-bins=-Tdefmt.x");
}
```

:::info
These three files should be found in the root folder of your project (same directory as `Cargo.toml`).
:::

#### Adding the Dependencies

At this step, we must add the dependencies we will use for our project. Bellow you will find the basics you will need for a minimal application, including an `usb_logger` to *"enable"* debugging over serial.

##### `embassy-executor`

This is an `async/await` executor designed for embedded. To add it as a dependency to your project, run:

```shell
cargo add embassy-executor --features arch-cortex-m,executor-thread,executor-interrupt,task-arena-size-32768,defmt
```

* `arch-cortex-m` - feature to specify we are running on the cortex M architecture
* `executor-thread` - enable the thread-mode executor (using WFE/SEV in Cortex-M, WFI in other embedded archs)
* `executor-interrupt` - enable the interrupt-mode executor (available in Cortex-M only)
* `task-arena-size-X` - sets the task arena size
* `defmt` - use deferred formatting for logs

We will also need to add the `cortex-m` and `cortex-m-rt` crates as dependencies, as the `#[executor::main]` attribute depends on the minimal startup code for the Cortex M microcontrollers found in this crates. To do that, run:

```shell
cargo add cortex-m
cargo add cortex-m-rt
```

##### `embassy-time`

This crate enables timekeeping, timeouts and delays. Add it by running:

```shell
cargo add embassy-time
```

#### `embassy-rp`

This crate is a **Hardware Abstraction Layer** for the **RP2040**. You can add it to your project like so:

```shell
cargo add embassy-rp --features time-driver,critical-section-impl,rp2040,defmt
```

* `time-driver` - enable the timer for use with `embassy-time` with a `1MHz` tick rate.
* `critical-section-impl` - configure the critical section crate to use an implementation that is safe for multicore use on RP2040
* `rp2040` - this crate also works for other Raspberry MCU's,
so we need to specify the one we are using

#### `embassy-usb-logger`

USB implementation of the `log` crate. It allows the usage of `info!` macro and some more. To add it, run the following command:

```shell
cargo add log
cargo add embassy-usb-logger
```

#### `probe-panic`

This crate adds a panic handler for the microchip that prints panic messages over **JTAG**, and in order to add it, run:

```shell
cargo add panic-probe
```

#### `rp-pac`

This crate is a dependency for `embassy-rp`, but we need to explicitly add it to our project to avoid linker errors, as this crate also works for the RP2350 MCU.

```shell
cargo add rp-pac --features cortex-m-rt,defmt,rp2040,rt
```

Finally, we should add the `defmt` and `defmt-rtt` crates, as we will be using some of the macros defined by the former to send logs back to our host. The latter crate transmits the log messages over the RTT (Real-Time Transfer) protocol.

```shell
cargo add defmt
cargo add defmt-rtt
```

### The code

Here you can find a minimally explained code that prints `"Hello World!"` over the serial interface and demonstrates how two different tasks can be run concurrently. You can run this by using

```shell
cargo run
```

or by starting the `launch request` task at the top of the **Run and Debug** menu.

#### `main.rs`

```rust
#![no_std]
#![no_main]

use defmt::*;
use embassy_executor::Spawner;
use embassy_rp::gpio::{self};
use embassy_time::{Duration, Timer};
use {defmt_rtt as _, panic_probe as _};

// Async task to send a log message
#[embassy_executor::task]
async fn print_task() {
    loop {
        info!("Print task");
        Timer::after(Duration::from_secs(2)).await;
    }
}

#[embassy_executor::main]
async fn main(spawner: Spawner) {
    // Initialize peripherals
    let p = embassy_rp::init(Default::default());

    Timer::after(Duration::from_secs(1)).await;
    info!("Hello world!");

    // Spawn the print task
    Timer::after(Duration::from_secs(1)).await; 
    spawner.spawn(print_task()).unwrap();

    loop {
        // Print a message from the main task as well
        info!("Main task");
        Timer::after(Duration::from_secs(3)).await;
    }
}
```
