// 追加行と削除行の合計が200行を超えた場合;
const totalChanges = danger.github.pr.changes;
if (totalChanges > 3) {
  warn('diffが200行を超えています');
}

// 編集ファイル数が10ファイルを超えた場合;
const modifiedFilesCount = danger.github.pr.modified_files.length;
const createdFilesCount = danger.github.pr.created_files.length;
const totalFiles = modifiedFilesCount + createdFilesCount;

// わざとdiffをつけます
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
// テスト
if (totalFiles > 1) {
  warn('編集ファイル数が10ファイル超えています');
}
