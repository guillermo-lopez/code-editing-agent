# Code Editing Agent Demo

> *This README was created by Claude using the edit_file tool*

This repository contains examples of code editing tasks performed by an AI agent. It includes:

- A modified FizzBuzz implementation (`fizzbuzz.js`) that runs from 1 to 15
- A ROT13 decoder script (`congrats.js`) that decodes an encoded congratulatory message
- A Go-based code editing agent that powers the editing functionality

## About

This project was created while following the tutorial: [How to Build an Agent](https://ampcode.com/how-to-build-an-agent?utm_source=tldrwebdev) from AmpCode.

## Go Code Structure

The repository contains several Go files that implement the code editing agent:

- **main.go**: Entry point for the application that initializes the Claude client, sets up the agent with tools, and runs the main loop.

- **agent/agent.go**: Implements the core Agent struct and methods, handling the conversation flow and tool execution.

- **agent/interface.go**: Contains the implementation for interfacing with Claude API to process messages.

- **schema/schema.go**: Provides utilities for generating JSON schemas for tool inputs.

- **tools/tools.go**: Defines the ToolDefinition struct used to register tools with the agent.

- **tools/edit_file.go**: Implements the edit_file tool that can modify text files by replacing text.

- **tools/file_tools.go**: Implements the read_file tool for reading file contents.

- **tools/list_files.go**: Implements the list_files tool to display directory contents.

## Scripts

### FizzBuzz

A classic FizzBuzz implementation that prints numbers from 1 to 15:
- For multiples of 3, it prints "Fizz"
- For multiples of 5, it prints "Buzz"
- For multiples of both 3 and 5, it prints "FizzBuzz"

### Congratulations Message

A script that uses ROT13 decoding to reveal a hidden congratulatory message.

## Running the Scripts

To run any of the scripts, use Node.js:

```bash
node fizzbuzz.js
node congrats.js
```