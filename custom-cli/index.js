#!/usr/bin/env node

// const yargs = require('yargs');
// const { argv } = yargs(process.argv);

// const printFiveMoves = async (pokeMonName) => {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeMonName);
//     const pokemonData = await response.json();
//     const moves = pokemonData.moves.map(({ move: { name } }) => name);
//     console.log(moves.slice(0, 5));
// }

// printFiveMoves(argv._name);
//This is the code where we can pass the option from the CLI
//it can be used as runPokedex --_name=ditto 

const inquirer = require('inquirer');

const printFiveMoves = async (pokeMonName) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeMonName);
    const pokemonData = await response.json();
    const moves = pokemonData.moves.map(({ move: { name } }) => name);
    console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        name: 'pokemon',
        message: 'Enter the pokemon name',
    },
]).then(answers => {
    const pokemon = answers.pokemon;
    printFiveMoves(pokemon);
});