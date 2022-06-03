import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSoredPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, filName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = mstter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })
  //Sort posts by date
  return allPostData.sort(({ data: a, }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1
    } else {
      return 0;
    }
  })
}