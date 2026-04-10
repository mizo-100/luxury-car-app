# Luxury Car Dealer App 

厳選された高級車の魅力を最大限に引き出す、モダンな在庫管理・閲覧デモアプリです。
React と TypeScript を活用し、ラグジュアリーブランドの世界観を UI/UX で表現しました。

## --公開URL--
https://luxury-car-app.vercel.app/

## --主な機能--
- **ダイナミック・ヒーロースライダー**: `useEffect` を用いた自動フェードアニメーション。
- **インタラクティブ・カード**: 在庫車両のグリッド表示と、ホバーエフェクト。
- **詳細モーダル**: 条件付きレンダリングを活用した、車両詳細情報のポップアップ表示。
- **レスポンシブ対応**: PC、タブレット、スマホそれぞれのデバイスに最適化したレイアウト。

## --使用技術--
- **Frontend**: React (Vite), TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## --こだわったポイント--
1. **コンポーネントの再利用性**: 
   車の一覧 (`CarCard`) や詳細表示 (`CarModal`) をコンポーネント化し、データの流れを Props やスプレッド構文でシンプルに管理しました。
2. **ラグジュアリーな演出**:
   高級車サイトに相応しい「余白」と「フォントの強弱」を意識し、Tailwind CSS の `transition` や `scale` アニメーションを組み合わせて滑らかな動きを実現しました。
3. **安全なタイマー管理**:
   スライダーの `setInterval` は、コンポーネントのアンマウント時に適切にクリーンアップし、メモリリークを防ぐ設計にしています。

## --開発環境のセットアップ
1. リポジトリをクローン
   ```bash
   git clone [https://github.com/mizo-100/luxury-car-app.git](https://github.com/mizo-100/luxury-car-app.git)