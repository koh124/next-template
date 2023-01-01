## ★ディレクトリ構成

・src/hooks

react hooksコンポーネントを置く場所
必ずuseから始まるキャメルケースで命名する

・src/components

reactコンポーネントを置く場所

## ★TypeScript

・コンパイルの実行

基本的にnext.jsはtsxファイルを自動的にコンパイルするが

コマンドから手動でコンパイル実行することもできる

```
$ npx tsc target.ts
```

```
// typescriptをグローバルインストールしている場合
$ tsc path/to/target.ts
```

## ★prettier

```
$ npx prettier --write target.ts
```
