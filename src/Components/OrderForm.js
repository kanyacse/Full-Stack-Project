import React from 'react';

function OrderForm() {
  return (
    <div className="card p-3">
      <h5 className="card-title text-center">Order Your Title Search Now!</h5>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Street or Parcel No" />
        </div>
        <div className="mb-3">
          <select className="form-control">
            <option>State</option>
            {/* Add more states here */}
          </select>
        </div>
        <div className="mb-3">
          <select className="form-control">
            <option>Select County</option>
            {/* Add more counties here */}
          </select>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="City" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Zip" />
        </div>
        <div className="mb-3">
          <select className="form-control">
            <option>Services</option>
            {/* Add more services here */}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Order Now!</button>
      </form>
    </div>
  );
}

export default OrderForm;
