import { MemoModalForm } from "../style/memoModal";
import { deleteAllMemo } from "../api/memoFetch";
const MemoModal = ({ memoData, Modal, isModal, setMemoData }) => {
  const handleRemoveClickFinal = () => {
    const deleteAllMemoDate = memoData.filter(item => item.iuser === 2);
    deleteAllMemoDate.forEach(item => {
      deleteAllMemo(item.imemo);
    });
    setMemoData({});
    isModal(false);
    window.location.reload();
  };

  const handleModalFalse = () => {
    isModal(false);
    console.log(Modal);
  };
  return (
    <MemoModalForm>
      <div className="memo_modal_inner">
        <span>메모의 내용을 전부 삭제하시겠습니까?</span>
        <div className="sumbit_buttons">
          <button className="do_delete_btn" onClick={handleRemoveClickFinal}>
            삭제
          </button>
          <button className="cancel_delete_btn" onClick={handleModalFalse}>
            취소
          </button>
        </div>
      </div>
    </MemoModalForm>
  );
};

export default MemoModal;
