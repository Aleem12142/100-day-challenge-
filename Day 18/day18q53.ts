interface DeveloperSkills {
    languages: string[];
    tools: string[];
    framework: string[];
}

let developerSkills: DeveloperSkills = {
    languages: ["JavaScript", "TypeScript", "Pyton", "Java"],
    tools: ["VS code", "Git", "Docker", "Jira"],
    framework: ["React", "Angular", "Django", "Express"] 
};

let {languages, tools, framework} = developerSkills;
console.log(`Language: ${languages[0]}, Tool: ${tools[0]}, Framework: ${framework[0]}`);
