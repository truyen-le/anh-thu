import React, { useState } from 'react';
import TwitterLikeButton from 'twitter-like-button';
import { Container, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';

const Home = React.memo(() => {
  const [isStartClick, setStartClick] = useState(false);
  const target = useRef(null);
  return (
    <div>
      {isStartClick && (
        <video ref={target} className="video" autoPlay muted loop>
          <source
            src="https://media.istockphoto.com/id/1363406917/vi/video/h%C3%ACnh-%E1%BA%A3nh-ph%C3%A1t-tri%E1%BB%83n-b%E1%BB%81n-v%E1%BB%AFng-h%C3%ACnh-%E1%BA%A3nh-%C4%91%E1%BB%99ng-c%C3%A2y-tim-m%C3%A0u-n%C6%B0%E1%BB%9Bc.mp4?s=mp4-640x640-is&k=20&c=Lvkcdjvo7GJdcjWDdc6NWKBzlQ6pnP0qUv37WPxlKr0="
            type="video/mp4"
          />
        </video>
      )}
      {isStartClick && <div className="overlay" />}
      <div className="content">
        <Row className="justify-content-center">
          <Col xs="auto">
            {isStartClick ? (
              <div>
                <h5 className="text-white">
                  Bởi vì vợ iuuu luôn tỏa sáng rực rỡ
                </h5>
                <h5 className="text-white">
                  Bởi vì vợ iuuu luôn đáng yêu nhất
                </h5>
                <h5 className="text-white">
                  Bởi vì gặp được vợ là điều may mắn nhất của chồng
                </h5>
                <h5 className="text-white">Yêu vợ nhiều</h5>
              </div>
            ) : (
              <h5>Vợ iuuu click vào tym đi nè</h5>
            )}
          </Col>
        </Row>
        {!isStartClick && (
          <Row className="justify-content-center">
            <Col xs="auto">
              <Container>
                <TwitterLikeButton
                  isClick={isStartClick}
                  onClick={() => setStartClick(!isStartClick)}
                />
              </Container>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
});

export default Home;
