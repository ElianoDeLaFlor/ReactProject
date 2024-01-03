import React, { createRef } from "react";

interface CheckoutModalProps {
  total: number;
}

export function showModal() {
  let btn = document.querySelector("#btnshow") as HTMLButtonElement;
  btn.click();
}

function ShowMessage({price}: {price:number}) {
  if (price > 0) {
    return (
      <>
        Rs {price} will be debited from your card.
        <br />
        Tanks!
      </>
    );
  } else {
    return <>"The cart is empty"</>;
  }
}

function CheckoutModal(props: CheckoutModalProps) {
  return (
    <>
      <button
        id="btnshow"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        className="invisible"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Payment confirmation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ShowMessage price={props.total}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutModal;
