import {PostInfo} from "../model/PostInfo";
import {BlogListEntity} from "../model/BlogListPage";
import {BlogContentProps} from "../component/blog/BlogContent";

export const SampleBlogRelation:PostInfo[] = [
    {
        postId: "a", postName: "【新入生ブログリレー】うぇいるです！(自己紹介兼色変記事)"
    },{
        postId: "b", postName: "俺がAtcoderをやめた理由"
    },{
        postId: "c", postName: "部内競プロランキングをつくってみた"
    },{
        postId: "d", postName: "【ブログリレー】競技プログラミングしませんか？"
    },{
        postId: "e", postName: "AtCoder ABC 145 C – Average Length(300 点)"
    },{
        postId: "f", postName: "AtCoder 169 (ABC 169 C) のかけ算問題に苦戦した話"
    },{
        postId: "g", postName: "プログラミング苦手な人へ"
    }
]

export const SampleBlogRanking:PostInfo[] = [
    {
        postId: "h", postName: "ポケモン剣盾乱数で6Vメタモンが乱獲したかった。"
    },{
        postId: "i", postName: "やろう！NEUTRINO (AIきりたん)"
    },{
        postId: "j", postName: "【完全攻略】スーパー英語(E-learning)の効率の良い進め方"
    },{
        postId: "k", postName: "C++ ゲームライブラリについて"
    },{
        postId: "l", postName: "【Python】簡単！ミニゲーム製作！【CUI】"
    }
]

export const SampleBlogList:BlogListEntity[] = [
    {
        title:"私的おすすめChrome拡張機能",
        date:"2021/11/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg',
        id:'fd97fadf-7e3f-44e3-aa5f-a7c98bab574d'
    },{
        title:"【色変】AtCoder水色になりました！",
        date:"2021/10/31",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg',
        id:'a6cdac03-1a33-42c2-8b4b-8430884958b1'
    },{
        "title":"俺がAtcoderをやめた理由",
        "date":"2021/10/28",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/ダウンロード.png',
        id:'ecb73126-898a-495b-a557-18bd13c619b7'
    },{
        "title":"ポケモンで芝浦工大を表示する",
        "date":"2021/10/23",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/toyosu.jpg',
        id:''
    },{
        "title":"エンジニアが死滅シタ世界～アンドロイドとふたりぼっちで生きろ～　レビュー"
        ,"date":"2021/10/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/スクリーンショット-2021-10-10-000838-300x143.png',
        id:''
    },{
        "title":"CMakeの使い方 for Windows",
        "date":"2021/10/7",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/06/120px-ISO_C_Logo.svg_.png',
        id:''
    },{
        "title":"アクションゲームに使う衝突判定を作りました",
        "date":"2021/10/1",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/paint_eyecatch.png',
        id:''
    },{
        "title":"WindowsでReactの開発環境構築は一癖あった話",
        "date":"2021/9/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png',
        id:''
    },{
        "title":"DiscordのチャットボットをPythonで実装してみた",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png',
        id:''
    },{
        "title":"英語のドキュメントを読むのにおすすめの本！",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/イラストや_禁止本-257x300.png',
        id:''
    },{
        "title":"PGGANを実装してanimefaceを生成したい",
        "date":"2021/9/24",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png',
        id:''
    },{
        "title":"[iOS]Twitterを開いたとき任意の確率で英単語アプリを開くようにするオートメーション",
        "date":"2021/9/18",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/03/twitter-300x300.png',
        id:''
    },{
        "title":"RECRUIT 日本橋ハーフマラソン 2021〜増刊号〜 に参加した話　",
        "date":"2021/9/15",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/whilerecharfmara-300x159.jpg',
        id:''
    },{
        "title":"Unity1週間ゲームジャムに参加してきました",
        "date":"2021/9/13",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/unityroom-300x161.png',
        id:''
    }, {
        "title": "WebAssemblyで立体モデルの描画",
        "date": "2021/8/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png',
        id:''
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
        title: "なんかかっこいい名前の資格取ったよ^_^！"
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/スクリーンショット-180-1-300x163.png",
        title: "初心者、電卓アプリ作りに挑戦！"
    },{
        date: "2021/8/27",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        title: "SAGAN(Self-Attention GAN)でAnimefaceの生成"
    },{
        date: "2021/8/25",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/03/go-300x95.jpg",
        title: "Go言語 のお作法(?)について"
    },{
        date: "2021/8/20",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/p1-300x300.jpg",
        title: "arduino cli が利用できるようになるまで"
    },{
        date: "2021/8/17",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/whileESP-271x300.jpg",
        title: "ESP32とGoogleアシスタントを使って声で部屋の照明をオンオフできるようにした話"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/06/profile.png",
        title: "Umiの最近のゲーム事情"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png",
        title: "WebAssemblyでHello, World! [Rust]"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/keyboard-300x152.png",
        title: "AutoHotKeyのすゝめ"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/computer_mob_programming-300x300.png",
        title: "教師なし学習におけるクラスタ数の決定方法について"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/プログラミングの基礎の基礎_写真-169x300.jpg",
        title: "プログラミング初心者におすすめの本！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/330px-WolframCorporateLogo.svg_-300x236.png",
        title: "Wolfram Alphaで定義域によって式が異なる関数の計算をする"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/windows10logo640-300x166.jpg",
        title: "最近のwindowsが不安定過ぎる！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        title:"私的おすすめChrome拡張機能",
        date:"2021/11/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg',
        id:'fd97fadf-7e3f-44e3-aa5f-a7c98bab574d'
    },{
        title:"【色変】AtCoder水色になりました！",
        date:"2021/10/31",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg',
        id:'a6cdac03-1a33-42c2-8b4b-8430884958b1'
    },{
        "title":"俺がAtcoderをやめた理由",
        "date":"2021/10/28",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/ダウンロード.png',
        id:'ecb73126-898a-495b-a557-18bd13c619b7'
    },{
        "title":"ポケモンで芝浦工大を表示する",
        "date":"2021/10/23",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/toyosu.jpg',
        id:''
    },{
        "title":"エンジニアが死滅シタ世界～アンドロイドとふたりぼっちで生きろ～　レビュー"
        ,"date":"2021/10/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/スクリーンショット-2021-10-10-000838-300x143.png',
        id:''
    },{
        "title":"CMakeの使い方 for Windows",
        "date":"2021/10/7",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/06/120px-ISO_C_Logo.svg_.png',
        id:''
    },{
        "title":"アクションゲームに使う衝突判定を作りました",
        "date":"2021/10/1",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/paint_eyecatch.png',
        id:''
    },{
        "title":"WindowsでReactの開発環境構築は一癖あった話",
        "date":"2021/9/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png',
        id:''
    },{
        "title":"DiscordのチャットボットをPythonで実装してみた",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png',
        id:''
    },{
        "title":"英語のドキュメントを読むのにおすすめの本！",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/イラストや_禁止本-257x300.png',
        id:''
    },{
        "title":"PGGANを実装してanimefaceを生成したい",
        "date":"2021/9/24",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png',
        id:''
    },{
        "title":"[iOS]Twitterを開いたとき任意の確率で英単語アプリを開くようにするオートメーション",
        "date":"2021/9/18",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/03/twitter-300x300.png',
        id:''
    },{
        "title":"RECRUIT 日本橋ハーフマラソン 2021〜増刊号〜 に参加した話　",
        "date":"2021/9/15",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/whilerecharfmara-300x159.jpg',
        id:''
    },{
        "title":"Unity1週間ゲームジャムに参加してきました",
        "date":"2021/9/13",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/unityroom-300x161.png',
        id:''
    }, {
        "title": "WebAssemblyで立体モデルの描画",
        "date": "2021/8/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png',
        id:''
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
        title: "なんかかっこいい名前の資格取ったよ^_^！"
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/スクリーンショット-180-1-300x163.png",
        title: "初心者、電卓アプリ作りに挑戦！"
    },{
        date: "2021/8/27",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        title: "SAGAN(Self-Attention GAN)でAnimefaceの生成"
    },{
        date: "2021/8/25",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/03/go-300x95.jpg",
        title: "Go言語 のお作法(?)について"
    },{
        date: "2021/8/20",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/p1-300x300.jpg",
        title: "arduino cli が利用できるようになるまで"
    },{
        date: "2021/8/17",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/whileESP-271x300.jpg",
        title: "ESP32とGoogleアシスタントを使って声で部屋の照明をオンオフできるようにした話"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/06/profile.png",
        title: "Umiの最近のゲーム事情"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png",
        title: "WebAssemblyでHello, World! [Rust]"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/keyboard-300x152.png",
        title: "AutoHotKeyのすゝめ"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/computer_mob_programming-300x300.png",
        title: "教師なし学習におけるクラスタ数の決定方法について"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/プログラミングの基礎の基礎_写真-169x300.jpg",
        title: "プログラミング初心者におすすめの本！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/330px-WolframCorporateLogo.svg_-300x236.png",
        title: "Wolfram Alphaで定義域によって式が異なる関数の計算をする"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/windows10logo640-300x166.jpg",
        title: "最近のwindowsが不安定過ぎる！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        title:"私的おすすめChrome拡張機能",
        date:"2021/11/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg',
        id:'fd97fadf-7e3f-44e3-aa5f-a7c98bab574d'
    },{
        title:"【色変】AtCoder水色になりました！",
        date:"2021/10/31",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg',
        id:'a6cdac03-1a33-42c2-8b4b-8430884958b1'
    },{
        "title":"俺がAtcoderをやめた理由",
        "date":"2021/10/28",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/ダウンロード.png',
        id:'ecb73126-898a-495b-a557-18bd13c619b7'
    },{
        "title":"ポケモンで芝浦工大を表示する",
        "date":"2021/10/23",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/toyosu.jpg',
        id:''
    },{
        "title":"エンジニアが死滅シタ世界～アンドロイドとふたりぼっちで生きろ～　レビュー"
        ,"date":"2021/10/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/スクリーンショット-2021-10-10-000838-300x143.png',
        id:''
    },{
        "title":"CMakeの使い方 for Windows",
        "date":"2021/10/7",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/06/120px-ISO_C_Logo.svg_.png',
        id:''
    },{
        "title":"アクションゲームに使う衝突判定を作りました",
        "date":"2021/10/1",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/paint_eyecatch.png',
        id:''
    },{
        "title":"WindowsでReactの開発環境構築は一癖あった話",
        "date":"2021/9/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png',
        id:''
    },{
        "title":"DiscordのチャットボットをPythonで実装してみた",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png',
        id:''
    },{
        "title":"英語のドキュメントを読むのにおすすめの本！",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/イラストや_禁止本-257x300.png',
        id:''
    },{
        "title":"PGGANを実装してanimefaceを生成したい",
        "date":"2021/9/24",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png',
        id:''
    },{
        "title":"[iOS]Twitterを開いたとき任意の確率で英単語アプリを開くようにするオートメーション",
        "date":"2021/9/18",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/03/twitter-300x300.png',
        id:''
    },{
        "title":"RECRUIT 日本橋ハーフマラソン 2021〜増刊号〜 に参加した話　",
        "date":"2021/9/15",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/whilerecharfmara-300x159.jpg',
        id:''
    },{
        "title":"Unity1週間ゲームジャムに参加してきました",
        "date":"2021/9/13",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/unityroom-300x161.png',
        id:''
    }, {
        "title": "WebAssemblyで立体モデルの描画",
        "date": "2021/8/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png',
        id:''
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
        title: "なんかかっこいい名前の資格取ったよ^_^！"
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/スクリーンショット-180-1-300x163.png",
        title: "初心者、電卓アプリ作りに挑戦！"
    },{
        date: "2021/8/27",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        title: "SAGAN(Self-Attention GAN)でAnimefaceの生成"
    },{
        date: "2021/8/25",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/03/go-300x95.jpg",
        title: "Go言語 のお作法(?)について"
    },{
        date: "2021/8/20",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/p1-300x300.jpg",
        title: "arduino cli が利用できるようになるまで"
    },{
        date: "2021/8/17",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/whileESP-271x300.jpg",
        title: "ESP32とGoogleアシスタントを使って声で部屋の照明をオンオフできるようにした話"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/06/profile.png",
        title: "Umiの最近のゲーム事情"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png",
        title: "WebAssemblyでHello, World! [Rust]"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/keyboard-300x152.png",
        title: "AutoHotKeyのすゝめ"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/computer_mob_programming-300x300.png",
        title: "教師なし学習におけるクラスタ数の決定方法について"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/プログラミングの基礎の基礎_写真-169x300.jpg",
        title: "プログラミング初心者におすすめの本！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/330px-WolframCorporateLogo.svg_-300x236.png",
        title: "Wolfram Alphaで定義域によって式が異なる関数の計算をする"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/windows10logo640-300x166.jpg",
        title: "最近のwindowsが不安定過ぎる！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        title:"私的おすすめChrome拡張機能",
        date:"2021/11/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/11/Chrome-Web-Store-apps-300x169.jpeg',
        id:'fd97fadf-7e3f-44e3-aa5f-a7c98bab574d'
    },{
        title:"【色変】AtCoder水色になりました！",
        date:"2021/10/31",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg',
        id:'a6cdac03-1a33-42c2-8b4b-8430884958b1'
    },{
        "title":"俺がAtcoderをやめた理由",
        "date":"2021/10/28",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/ダウンロード.png',
        id:'ecb73126-898a-495b-a557-18bd13c619b7'
    },{
        "title":"ポケモンで芝浦工大を表示する",
        "date":"2021/10/23",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/toyosu.jpg',
        id:''
    },{
        "title":"エンジニアが死滅シタ世界～アンドロイドとふたりぼっちで生きろ～　レビュー"
        ,"date":"2021/10/10",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/スクリーンショット-2021-10-10-000838-300x143.png',
        id:''
    },{
        "title":"CMakeの使い方 for Windows",
        "date":"2021/10/7",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/06/120px-ISO_C_Logo.svg_.png',
        id:''
    },{
        "title":"アクションゲームに使う衝突判定を作りました",
        "date":"2021/10/1",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/10/paint_eyecatch.png',
        id:''
    },{
        "title":"WindowsでReactの開発環境構築は一癖あった話",
        "date":"2021/9/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2020/11/lfVWBmiW_400x400-300x300.png',
        id:''
    },{
        "title":"DiscordのチャットボットをPythonで実装してみた",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/bluebird_robot_bot-300x300.png',
        id:''
    },{
        "title":"英語のドキュメントを読むのにおすすめの本！",
        "date":"2021/9/26",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/イラストや_禁止本-257x300.png',
        id:''
    },{
        "title":"PGGANを実装してanimefaceを生成したい",
        "date":"2021/9/24",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png',
        id:''
    },{
        "title":"[iOS]Twitterを開いたとき任意の確率で英単語アプリを開くようにするオートメーション",
        "date":"2021/9/18",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/03/twitter-300x300.png',
        id:''
    },{
        "title":"RECRUIT 日本橋ハーフマラソン 2021〜増刊号〜 に参加した話　",
        "date":"2021/9/15",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/whilerecharfmara-300x159.jpg',
        id:''
    },{
        "title":"Unity1週間ゲームジャムに参加してきました",
        "date":"2021/9/13",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/09/unityroom-300x161.png',
        id:''
    }, {
        "title": "WebAssemblyで立体モデルの描画",
        "date": "2021/8/30",
        thumbnail: 'http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png',
        id:''
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/a-300x262.png",
        title: "なんかかっこいい名前の資格取ったよ^_^！"
    },{
        date: "2021/8/28",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/スクリーンショット-180-1-300x163.png",
        title: "初心者、電卓アプリ作りに挑戦！"
    },{
        date: "2021/8/27",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/pytorch_logo_icon_169823-300x150.png",
        title: "SAGAN(Self-Attention GAN)でAnimefaceの生成"
    },{
        date: "2021/8/25",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/03/go-300x95.jpg",
        title: "Go言語 のお作法(?)について"
    },{
        date: "2021/8/20",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/p1-300x300.jpg",
        title: "arduino cli が利用できるようになるまで"
    },{
        date: "2021/8/17",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/whileESP-271x300.jpg",
        title: "ESP32とGoogleアシスタントを使って声で部屋の照明をオンオフできるようにした話"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/06/profile.png",
        title: "Umiの最近のゲーム事情"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/08/1200px-WebAssembly_Logo.svg_-300x300.png",
        title: "WebAssemblyでHello, World! [Rust]"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/keyboard-300x152.png",
        title: "AutoHotKeyのすゝめ"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/computer_mob_programming-300x300.png",
        title: "教師なし学習におけるクラスタ数の決定方法について"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/プログラミングの基礎の基礎_写真-169x300.jpg",
        title: "プログラミング初心者におすすめの本！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/330px-WolframCorporateLogo.svg_-300x236.png",
        title: "Wolfram Alphaで定義域によって式が異なる関数の計算をする"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/windows10logo640-300x166.jpg",
        title: "最近のwindowsが不安定過ぎる！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    },{
        date: "",
        id: "",
        thumbnail: "http://den3.net/wp-content/uploads/2020/06/character_program_shutdown-300x300.png",
        title: "夏休みやりたいこと！！"
    }
]


export const SampleMarkdown = `
## はじめに
お久しぶりです、うぇいるです。　ブログを書くのをサボっていたのですが、AtCoderの色が変わったのでさすがに書かないとな…ということで色変記事を書きます。

## 水色になるまで
新入生ブログリレーの際に入緑の記事を書きました。そこから大体4か月くらいで水色になれました。

初めて参加したコンテストが4/24だったので半年＋一週間で入水することができました～

入緑直後まではPythonで参加していたのですが、夏休みにC++を勉強しそれ以降はC++で参加しています。ACLが使えてとても楽です。(Pythonが書けなくなりました)

水になるまでのAccepted数は638でした。緑になるまでのAccepted数が196だったので442問新たに解いたことになります。大体一か月に100問ペースくらい？で過去問埋めをしていたことになりますね。来年四月までにはAccepted数4桁行きたいです。

## やったこと
典型90の☆4以下全埋めをしました。めちゃくちゃ勉強になりました、おすすめです。

あとはAtCoder problemsのRecommendationをひたすら解いていった感じです。

![](http://den3.net/wp-content/uploads/2021/10/whileirohen2-1024x277.jpg) 

こんな感じです。青はほぼ埋めてません＞＜

## 終わりに
競技プログラミングは合う人と合わない人がいると思います。

問題を解くよりゲームとかアプリを開発したい！みたいな人にはなかなか難しいですよね。



そんな人でも、ヒューリスティックコンテストなら楽しめるのではないでしょうか？

ヒューリスティックコンテストは、出題される問題に対してより良いスコアを出せるプログラムを書くコンテストです。ビジュアライザが用意されているのでどういう手順でスコアを稼いでいるかの過程が眺められたりしてゲーム要素が強いコンテストだと僕は思っています。

AtCoderを辞めよう…なんて思ってる人！　もしかしたらヒューリスティックコンテストはハマるかもしれませんよ？

直近だと…

- [HACK TO THE FUTURE 2022 予選](https://atcoder.jp/contests/future-contest-2022-qual)

- [Hitachi Hokudai Lab. & Hokkaido University Contest 2021](https://atcoder.jp/contests/hokudai-hitachi2021)

- [AtCoder Heuristic Contest 006](https://atcoder.jp/contests/ahc006)

などがあります。

興味を持ったらぜひ参加してみてください！
`

export const SampleMarkdownCode:string = `
## なぜか

タイトルに書いてる通り, 車輪の再発明をしてしまいました.

しかし深いわけがありました.

というのも大学の授業で, Javaを使った成果物を提出する必要があったのですが, Java 16標準API以外のライブラリが使用できないというルールでした.

私はJavalinというWebフレームワークを使って5chみたいなWebアプリを作ると声高に宣言していたので, ここから逃げちゃダメだ！という思いでしこしこフレームワークから作り始めることにしました.

## できたもの

NginJ(nginxのJava版 というネーミングセンスのかけらもないなにか)
NginJ Github

・GET/POST/PUT/UPDATE/DELETEリクエスト受付
・パスパラメーター受け取り
・フォームパラメーター受け取り
・Javaのインスタンス変数をJSONに変換

コード例

このHttpServerクラスの後ろ側で動いている処理をすべて実装しました

`+'```java \nimport jp.toufu3.nginj.http.HttpServer;\nimport java.util.Map;\nimport java.util.List;\n\n//Path param name is \'id\'\nHttpServer.get("/route/:id",(ctx)->{\n    String pathParam = ctx.req.getPathParams().getOrDefault("id","empty");\n    ctx.res.setBody(pathParam);\n});\n\nHttpServer.post("/",(ctx)->{\n    ctx.res.setJSON(Map.of("A",List.of(1,2,3)));\n});\n//TCP 80 port receive\nHttpServer.get().start(80);\n```\n'
+`
こんな感じでパスパラメータの取得やフォームパラメータの取得といったWebフレームワークに標準搭載されているものや, Javaのリフレクションをフル活用したJavaObject->JSONコンバートまでやってくれるようになってます.

またこのWebフレームワークは, リクエストのたびにスレッドを立ち上げるApache方式ではなく, 1つのスレッドを無限ループにして, ひたすらリクエストを受け付けて, リクエストパスに関連付けたコールバックを呼び出す方式ですので, クライアントが10万接続してきても耐えられます！()

## 感想

短い間でしたが, 個人的なハッカソンみたいで楽しかったです(KONAMI感)

また, パスパラメータやパスに関連付けて登録された処理を呼び出す際のルートマッチの処理などのWebフレームワークの裏側を自分で実装したことでより深くWebフレームワークに必要な機能を理解でき(たような気がし)ました.

またJavaでノンブロッキングIOを実装する際, あまりに日本語の参考資料が少なく, かろうじて存在していたコードをコピペしてしまいました. ごめんなさい.

時間がかかったのはやはりJSON化でした.
GSONやJacksonってどうやって動いてるんですか？

次はJSON→JavaObjectあたりを実装したり, HTTPリクエストヘッダ改ざん攻撃に対処する機能あたりが欲しいかもしれません

もしくはリバースプロキシみたいな機能も欲しかったり〜〜？
あとCPUのコア数文のスレッドだけ立ち上げてそこでノンブロッキングIOな処理をさせることでNode.jsの上位互換を目指してもいいかもしれない.

次回のお楽しみ.
`

export const SampleBlogArticle:BlogContentProps[] = [
    {
        author:{
            avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
            bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
            name: "うぇいる",
            id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
        },
        comment: [
            {
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            },{
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            }
        ],
        header_img: "http://den3.net/wp-content/uploads/2021/10/whileirohen-300x205.jpg",
        markdown: SampleMarkdown,
        title: "【色変】AtCoder水色になりました！",
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            },
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/b88e6a8ea6.png",
                id: "atcoder",
                name: "AtCoder"
            }
        ]
    },{
        author:{
            avatar: "http://den3.net/wp-content/uploads/2020/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-05-30-22.52.18-150x150.png",
            bio: "アプリ作ったり競プロしてる2年生 アニメとか声優・アニソンも好き TrySailって知ってる〜？",
            name: "tofu",
            id: '84a30db9-616a-4ea1-be3d-3819ffbbb39b'
        },
        comment: [
            {
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2021/07/whileicon-150x150.png",
                    bio: "誰か、、、変数の名付けのセンスをください、、、、、、、、、",
                    name: "うぇいる",
                    id: '9b458210-c9a3-4f5b-bb4e-baafc3e77569'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            },{
                author:{
                    avatar: "http://den3.net/wp-content/uploads/2020/05/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-05-30-22.52.18-150x150.png",
                    bio: "アプリ作ったり競プロしてる2年生 アニメとか声優・アニソンも好き TrySailって知ってる〜？",
                    name: "tofu",
                    id: '84a30db9-616a-4ea1-be3d-3819ffbbb39b'
                },
                body: "それってあなたの感想ですよね?",
                date: "2021/02/11 08:10:11"
            }
        ],
        header_img: "http://den3.net/wp-content/uploads/2021/07/GitHub-Mark-300x300.png",
        markdown: SampleMarkdownCode,
        title: "ノンブロッキングIOなHttp Web フレームワークを作った【車輪の再発明】",
        topics:[
            {
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "Java"
            },{
                avatar: "https://storage.googleapis.com/zenn-user-upload/topics/5c47bb8423.png",
                id: "java",
                name: "AAAAAAAAAAAAAAAAAAAAAAAAA"
            }
        ]
    }
]
