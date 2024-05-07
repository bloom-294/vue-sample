#!/usr/bin/env node
'use strict';

const fs = require('fs');

const template = (dir,file) => {
    return(
        `
        import type { Meta } from "@storybook/vue3";
        import ${file} from "./${file}.vue";
        
        const meta = {
            title: "${dir}/${file}",
            component: ${file},
        } satisfies Meta<typeof ${file}>;
        
        export default meta;
        
        export const Default = {};
        `
    )
}

// if(process.argv.length < 4) {
//     console.log("引数が足りません。");
// }else if (process.argv.length === 5) {
//     fs.writeFile(`./src/${process.argv[2]}/${process.argv[3]}/${process.argv[4]}/${process.argv[4]}.stories.ts`, template(process.argv[3],process.argv[4]), function (err) {
//         if (err) { 
//             console.log("値を間違えている可能性があります。")
//             throw err;
//          }
//     });
//     console.log(`./src/${process.argv[2]}/${process.argv[3]}/${process.argv[4]}/${process.argv[4]}.stories.tsが作成されました`);
// }else if (process.argv.length === 4) {
//     fs.writeFile(`./src/${process.argv[2]}/${process.argv[3]}/${process.argv[3]}.stories.ts`, template(process.argv[2],process.argv[3]), function (err) {
//         if (err) { 
//             console.log("値を間違えている可能性があります。")
//             throw err;
//          }
//     });
//     console.log(`./src/${process.argv[2]}/${process.argv[3]}/${process.argv[3]}.stories.tsが作成されました`);
// }


// let dir_1 ="";
// let dir_2 ="";
// let dir_name ="";


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('vueファイルとディレクトリは作成しましたか?（y/n） ', (answer) => {


//     if(answer == "y" || answer == "yes"){
//         console.log(`Hello, ${answer}!`);

//         readline.question('ディレクトリを選択してください。Pages/components  (p/c) ', (answer) => {
//             if(answer == "p" || answer == "Pages"){
//                 dir_1 = "Pages";
//                 readline.question('ファイル名を入力してください。', (answer) => {
//                     dir_name = answer;
//                     // 処理
//                 });

//             }else if(answer == "c" || answer == "components"){
//                 dir_1 = "components";
//                 readline.question('ディレクトリを選択してください。Atoms/Molecules/Organisms  (a/m/o)', (answer) => {
//                     dir_2 = answer;
//                     if(){
//                         readline.question('ディレクトリを選択してください。Atoms/Molecules/Organisms  (a/m/o)', (answer) => {
//                             dir_2 = answer;
//                             // 処理
//                         });
//                     }
//                 });
//             }else {
//                 console.log("始めからやり直してください。");
//                 readline.close();
//             }

//         });




//     }else if(answer == "n" || answer == "no"){
//         console.log("作成してから実行してください。")
//     }else{
//         console.log("作成してから実行してください。")
//     }
//     readline.close();
//   });


//   readline.question('What is your name? ', (answer) => {
//     console.log(`Hello, ${answer}!`);
//     readline.close();
//   });


// console.log(process.argv[2]);

// const files = fs.readdirSync('./src/components/');
// console.log(files)


// fs.readdir('./src/components', (err, files) => {
//     if (err) { throw err; }

//     files.forEach(file => {
//         // let files = fs.readdirSync(`${file}`);
//         console.log(file);
//     });
// });

// import { glob } from 'glob';
// const glob = require('glob');

// glob('*', (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

