https://youtu.be/6fNy0iD3hsk?t=16955

    4:42:35

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
