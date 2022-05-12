https://youtu.be/6fNy0iD3hsk?t=17786
4:56:26

詰まったところ
動画内で説明されている Firebase のバージョンが古く、書き方が変わっている箇所があった。
例えば、動画内では

> import firebase from "firebase";
> と記載されている箇所が多数あるが、これは v8 までの記法らしい。
> v9 からの記法について[公式ドキュメント](https://firebase.google.com/docs/firestore/quickstart?hl=ja)を参考にしている。
> import {initializeApp} from "firebase/app";
> などと適宜記載を入れ替えて行った。

そうやって合っているか半信半疑のまま進め、いよいよ Input したテキストを Firebase に保存しようとしたが、ここでも詰まった。

ここについては Firebase に飛ばす Json を作るときに

> {message: inputRef.current.value}
> と記載するべきところを
> message: inputRef.current.**Input**
> とか売ってしまっていたことが原因である。

Copilot に打ってもらったのをろくに確認しなかった証拠である。

ともかく、このエラーを解消し無事にテキストボックスの中身を Firebase に保存できたので満足。

---

書き方が v8 なので以下のような書き方が必要だろう
https://cloud.google.com/firestore/docs/manage-data/add-data?hl=ja#web-version-9_2
とりあえずそれっぽくは埋めたが画像のアップロード時に
FirebaseError: Invalid document reference. Document references must have an even number of segments, but posts has 1.
上記のエラーが発生する。
Document には複数のセグメントが必要だとか書いてはあるが、今の俺には全くわからないところである。
該当箇所も絞り込みしきれない上に正解も無い。修正は放置して無視して先に進める。
修正する場合は
https://www.youtube.com/watch?v=6fNy0iD3hsk&t=17786s
この辺から見るといい。

または npm uninstall するのも手だろう。

---

https://youtu.be/6fNy0iD3hsk?t=18119

5:01:59
ダウングレードした。うｐできるようになった。
