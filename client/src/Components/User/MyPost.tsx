/* eslint-disable */
import { useState } from 'react';
import { useGetMyPostToCare } from '../../Hook/useGetMyPostToCare';
import Card from '../Care/Card';
import { useGetMyPostToPeacock } from '../../Hook/useGetMyPostToPeacock';
import PageBtns from './PageBtns';

const MyPost: React.FC<{ userId: string }> = ({ userId }) => {
  const [category, setCategory] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const { MyPostToCare } = useGetMyPostToCare(userId, page);
  const { MyPostToPeacock } = useGetMyPostToPeacock(userId, page);
  console.log(MyPostToCare);
  console.log(MyPostToPeacock);

  return (
    <div className="w-full">
      <div className="">
        <button
          className={`${
            category && 'text-hoverGreen'
          } hover:text-hoverGreen mx-3`}
          onClick={() => setCategory(true)}
        >
          돌봄리스트
        </button>
        <button
          className={`${
            !category && 'text-hoverGreen'
          } hover:text-hoverGreen mx-3`}
          onClick={() => setCategory(false)}
        >
          자랑하기
        </button>
      </div>
      {/* <div className="w-full grid gap-4	grid-cols-1 md:grid-cols-3"> */}
      <div className="flex flex-wrap justify-center">
        {category ? (
          <>
            {MyPostToCare &&
              (MyPostToCare.data.length === 0 ? (
                <div className="mt-10">
                  <p>작성한 게시글이 없습니다.</p>
                </div>
              ) : (
                MyPostToCare.data.map((ele, idx) => (
                  // 추후 postId로 감싸는 div 추가할 것
                  <Card
                    key={idx}
                    title={ele.title}
                    locationTag={ele.locationTag}
                    petSizes={ele.petSizes}
                    nickName={ele.nickName}
                    profileImgUrl={ele.profileImgUrl}
                    imgUrls={ele.imgUrls}
                    postId={ele.postId}
                  />
                ))
              ))}
          </>
        ) : (
          <>
            {MyPostToPeacock &&
              (MyPostToPeacock.data.length === 0 ? (
                <div className="mt-10">
                  <p>작성한 게시글이 없습니다.</p>
                </div>
              ) : (
                MyPostToPeacock.data.map((ele, idx) => (
                  // 추후 postId로 감싸는 div 추가할 것
                  <Card
                    key={idx}
                    title={ele.title}
                    locationTag={ele.locationTag}
                    petSizes={ele.petSizes}
                    nickName={ele.nickName}
                    profileImgUrl={ele.profileImgUrl}
                    imgUrls={ele.imgUrls}
                    postId={ele.postId}
                  />
                ))
              ))}
          </>
        )}
      </div>
      {category ? (
        <>
          {MyPostToCare && (
            <PageBtns data={MyPostToCare} page={page} setPage={setPage} />
          )}
        </>
      ) : (
        <>
          {MyPostToPeacock && (
            <PageBtns data={MyPostToPeacock} page={page} setPage={setPage} />
          )}
        </>
      )}
    </div>
  );
};

export default MyPost;
