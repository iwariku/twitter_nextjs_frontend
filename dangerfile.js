// 追加行と削除行の合計が200行を超えた場合;
const totalChanges = danger.github.pr.changes;
if (totalChanges > 200) {
  warn('diffが200行を超えています');
}

// 編集ファイル数が10ファイルを超えた場合;
const modifiedFilesCount = danger.github.pr.modified_files;
console.log(modifiedFilesCount);
const createdFilesCount = danger.github.pr.created_files;
const totalFiles = modifiedFilesCount + createdFilesCount;

if (totalFiles > 10) {
  warn('編集ファイル数が10ファイル超えています');
}
