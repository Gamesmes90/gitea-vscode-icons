const manifest = {
  manifest_version:2,
  version:'1.0.1',
  description: 'This extension shows VS Code icons in Gitea Repositories',
  name:'gitea-vscode-icons',
  author: 'Gamesmes90 <gamesmes90@gmail.com>',
  icons: {
    '128': 'favicon128.png',
    '48': 'favicon48.png',
    '16': 'favicon16.png'
  },
  browser_specific_settings: {
    gecko: {
        id: 'gamesmes90@gmail.com'
    }
  },
  content_scripts:[
    {
     matches:['<all_urls>'],
     js:['main.js']
    }
  ],
  web_accessible_resources: [
    "icons/*.svg"
  ]
}

export const createFirefoxManifest = () => {
  return manifest;
};