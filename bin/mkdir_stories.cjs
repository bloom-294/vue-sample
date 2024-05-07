#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { exit } = require("process");
const prompts = require("prompts");

let dir = "";
let dir_2 = "";
let dir_search = "";
let dir_list = [];
let path = "";
let component = "";

const template = (dir, file) => {
	return `
        import type { Meta } from "@storybook/vue3";
        import ${file} from "./${file}.vue";
        
        const meta = {
            title: "${dir}/${file}",
            component: ${file},
        } satisfies Meta<typeof ${file}>;
        
        export default meta;
        
        export const Default = {};
        `;
};

const createStory = (broadFlag) => {
	if (broadFlag == true) {
		path = `./src/${dir}/${component}/`;
	} else {
		path = `./src/${dir}/${dir_2}/${component}/`;
	}

	dir_search = fs.readdirSync(path);

	if (dir_search.includes(`${component}.stories.ts`)) {
		console.error("もう既に存在しています");
		return exit;
	} else {
		path = `${path}${component}.stories.ts`;

		fs.writeFile(path, template(dir, component), function (err) {
			if (err) {
				console.error("❌");
				throw err;
			}
		});

		console.log(`
        🎉✨success✨🎉

           🍪 ${path}
        `);
	}
};

const DirListAdd = async () => {
	dir_search.forEach((e) => {
		dir_list.push({ title: e, value: e });
	});
};

(async () => {
	try {
		const confirm = await prompts({
			type: "confirm",
			name: "value",
			message: "ディレクトリは作成しましたか？",
			initial: true,
		});

		if (confirm.value == true) {
			console.log(confirm.value);
		} else {
			console.error("作成してください");
			return exit;
		}

		const select_dir = await prompts({
			type: "select",
			name: "value",
			message: "選択してください",
			choices: [
				{ title: "./src/Pages", value: "Pages" },
				{ title: "./src/components", value: "components" },
			],
			initial: 0,
		});

		dir = `${select_dir.value}`;
		dir_search = fs.readdirSync(`./src/${dir}`);

		DirListAdd();

		const selectChild = await prompts({
			type: "select",
			name: "value",
			message: "",
			choices: dir_list,
			initial: 0,
		});

		//   Pages
		if (dir == "Pages") {
			component = selectChild.value;
			createStory(true);

			//   components
		} else {
			dir_2 = selectChild.value;
			path = `./src/${dir}/${dir_2}/`;
			dir_search = fs.readdirSync(path);

			dir_list = [];
			DirListAdd();

			const selectGchild = await prompts({
				type: "select",
				name: "value",
				message: "選択してください",
				choices: dir_list,
				initial: 0,
			});

			component = selectGchild.value;
			createStory(false);
		}
	} catch {
		console.log("exit");
	}
})();
