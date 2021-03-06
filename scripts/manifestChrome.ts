const manifest = {
  manifest_version:3,
  version:'1.1.1',
  description: 'This extension shows VS Code icons in Gitea Repositories',
  name:'gitea-vscode-icons',
  author: 'Gamesmes90 <gamesmes90@gmail.com>',
  offline_enabled: true,
  icons: {
    '128': 'favicon128.png',
    '48': 'favicon48.png',
    '16': 'favicon16.png'
  },
  content_scripts:[
    {
      matches:['<all_urls>'],
      js:['main.js']
    }
  ],
  web_accessible_resources: [{
    "resources": ["icons/*.svg"],
    "matches": ["<all_urls>"]
  }]
}

export const createChromeManifest = () => {
  return manifest;
};