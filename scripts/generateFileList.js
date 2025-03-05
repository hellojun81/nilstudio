const fs = require("fs");
const path = require("path");

const directories = ["height", "width"];
const outputPath = path.join(__dirname, "../src/assets/images/imageList.json");

const imageList = {};

directories.forEach((folder) => {
  const dirPath = path.join(__dirname, `../src/assets/images/${folder}`);
  const files = fs.readdirSync(dirPath)
    .filter((file) => /\.(jpg|png|jpeg)$/i.test(file)) // 이미지 파일만 필터링
    .sort(); // 파일명 정렬
  imageList[folder] = files;
});

// JSON 파일로 저장
fs.writeFileSync(outputPath, JSON.stringify(imageList, null, 2));

console.log("✅ 이미지 리스트 JSON 생성 완료:", outputPath);
