import React from "react";
import "./Index.css";
function index() {
  return (
    <div>
      <div className="anuj">
        <div className="ok">
          <p className="flex-start">Uber Wallet</p>
          <p className="flex-end">SK<i class="fa-solid fa-caret-down"></i></p>
        </div>
      </div>
      <hr/>
      <div className="anuja">
        <div className="oka">
          <p className="head">Uber Cash</p>
          <p className="rs">₹ 0.00</p>
          <p className="gift">+ Gift card</p>
        </div>
      </div>

      <div className="anujaa">
        <div className="okaa">
          <p className="heada">Payment methods</p>
          <p className="gifta">+ Add payment method</p>
        </div>
      </div>
      <div className="line">
        <hr/>
      </div>
      <div className="anujaa">
        <div className="okaa">
          <p className="heada">Vouchers</p>
          <p className="giftaa">+ Add Voucher</p>
        </div>
      </div>
    </div>
  );
};

export default index;
