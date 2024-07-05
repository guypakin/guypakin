import Image from 'next/image';
import uomicImage1 from '../../../public/lfkj.jpg';
import uomicImage2 from '../../../public/ljil;..jpg';
import uomicImage3 from '../../../public/36862_640.jpg';

export default function Card() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-3 mb-3">
                    <div className="lfkj" style={{ width: "18rem" }}>
                        <Image src={uomicImage1} alt="uomic" width={450} height={200} className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">コミック・絵本 | 西日本新聞 オンラインブックストア</p>
                            <p className="card-text">98-113.-</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Image src={uomicImage2} alt="ljil;" width={450} height={200} className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">コミック・絵本 | 西日本新聞 オンラインブックストア</p>
                            <p className="card-text">88-103.-</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <Image src={uomicImage3} alt="36862_640" width={450} height={200} className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text">コミックブック ＳＴＩＲＩＮＧ 糸 . ウィスット・ポンニミット -の商品詳細 | 蔦屋書店オンラインストア</p>
                            <p className="card-text">108-123.-</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
