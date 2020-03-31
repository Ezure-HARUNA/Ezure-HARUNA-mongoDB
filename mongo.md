1. データベースとは
- 使える状態のデータの集まり

2. データベース化のメリット
- データを管理できる(CRUDできる)
- 目的のデータを簡単に探せる（検索できる)
- データを編集して使える
- データの保存ができる
　→今のアプリのお気に入りリストがリロードしても追加したまま
　　ログイン機能を付けるのに、データベースが必要

3. データベースの種類
- リレーショナルDB
- NoSQL(SQL以外)←Mongoはこれ

4. リレーショナルDBとNoSQLの違い
 1. リレーショナルDB  
　　データを分析したり、ミスが許されないデータベースに使われる
　　定義が必要
 2. NoSQL
    一つ一つが小さく、大量のデータを扱うことに長けている
→今回は区別を何となく覚えていればOK

5. 
mongo>
 1. MongoDB shell
   →MongoDBの操作ができるもの
   →環境変数設定→google
show dbs>
最初に入っているDBを確認できる
use Test
cdの中のDBに移動している？

6. 構造
MongoBD>collection>document

db.createCollection('users')>
usersというcollectionを作成

show collections>
作ったcollectionを確認できる

db.todos.drop()>
コレクションの削除

db.users.insert({name: "ezure", age:11})
ドキュメントの作成
→db.users.insert({school: yokohama})
 全然関係ない情報もドキュメントとして作成できる

db.users.find()
ドキュメントの確認
→idが定まる。

db.users.find({name: "ezure"})
ドキュメントの検索

db.users.remove({name: "ezure"})
ドキュメントの削除

6. 
サーバーとデータベースを接続することで、自動化できる
yarn init 
yarn add express(サーバーサイド)
yarn add mongoose(mongoDBと接続してくれる)
yarn create react-app client(clientの名前は慣習)

node_modules(サーバー)
client
mongoフォルダにserver.jsを作成
yarn add express
node server.js

client(React側）をyarn start
ターミナルに入力できない→サーバーが立った(デフォルト:localhost3000)

mongoをserver.js
dbをサーバーと接続→リロードしても、データが保存された状態になる

通信する処理

clientのpackage.jsonに
"proxy": "http://localhost:3001",追加
7. 
mongo コマンド
公式サイト

デプロイ

➀公開前
build(アプリを動く状態にする（最小限））→デプロイ（公開）
コマンド　yarn build
package.jsonに
"homepage": "https://Ezure-HARUNA.github.io/Movie-App/"
コマンド　yarn add --dev gh-pages
package.jsonのscript内に
"deploy": "yarn run build && gh-pages -d build"
デプロイ
yarn deploy
➁
アプリのnode_modulesを消去








