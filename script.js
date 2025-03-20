// List of your GAS project details: name, description, and URL
const projects = [
    {
        name: "牛乳じゃんけん確率計算機",
        description: "自分がじゃんけんの手を選んだ後、相手が出す手の確率を算出し、勝敗を計算してくれるツールです。",
        url: "https://script.google.com/macros/s/AKfycbxwAuLDwVx7JgLP26aFr71H2kcQOxJhVlBlwBRgc8C6-9dSNI2ImMPZB9IrFB4fckvW/exec"
    },
    {
        name: "リアルタイム時計",
        description: "現在の時刻をリアルタイムで表示するツールです。常に最新の時間を正確に表示し、時間を確認しやすくします。",
        url: "https://script.google.com/macros/s/AKfycbzu9pFgP4za-zHIp_2xZ_2mTn4nKgIjpvv9Bb8-s4IoUyGpiMmqhfXdgP8AW-okieRDWQ/exec"
    },
    {
        name: "ワンクリック詐欺体験",
        description: "ワンクリック詐欺がどのようなサイトかを体験できるツールです。実際に遭遇する前に警戒心を高めることを目的としています。",
        url: "https://script.google.com/macros/s/AKfycbyyjY1_LWTjx-Qnqu32tIaf4GGXF33K-g5KsHB6EfeanK98yZK6GIH0P6YU4C8eTLQ/exec"
    },
    // Add more projects with descriptions as needed
];

// Function to populate the list with name, description, and link
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        
        // Project name with link
        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.target = "_blank";
        projectLink.textContent = project.name;
        listItem.appendChild(projectLink);
        
        // Project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        listItem.appendChild(projectDescription);

        projectList.appendChild(listItem);
    });
}

// Call the function when the page loads
window.onload = displayProjects;
