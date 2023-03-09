import Link from "next/link";
// import { Link } from 'react-router-dom';
import HelpCenter from "../../components/help/help-center";
import Divider from "../../components/shoppingCart/divider";
import React, { useEffect } from "react";
import { useState } from "react";
const imagePath = "https://api.gr-oops.com/";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// 团购-购物车
 function  ShoppingCart () {
  

  const [json, setData] = useState<any>([]);
  
  useEffect(() => {
    async function fetchData() {
    //  setIsLoading(true);
      const response = await fetch("/api/product/get/cartdata");
      const json = await response.json();
      setData(json);
    //  setIsLoading(false);
    }
    fetchData();
  }, [
  // value
  ]);

   
    return (
      <>
        <div className="shoppingCart">
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                width: "69%",
                backgroundColor: "#F9f8f6",
              }}
            >
              <div className="">
                <div
                  style={{
                    fontSize: "1.8rem",
                    marginLeft: "3rem",
                    marginTop: "2rem",
                  }}
                >
                  {" "}
                  Your Shopping Cart
                </div>
                <div className="float-right m-8 mx-16 text-2xl"> Checkout</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Divider></Divider>
              </div>

              {json.map((item: any, index: any) => (
                <div
                  className="clear-right  divide-x-8 divide-gray-200"
                  style={{ display: "flex", marginBottom: "20px" }}
                >
                  <div
                    style={{
                      width: "50%",
                      backgroundColor: "",
                      display: "flex",
                    }}
                  >
                    <img
                      style={{
                        width: "14.87rem",
                        height: "11.6rem",
                        borderRadius: "35px",
                        marginTop: "30px",
                        marginLeft: "6%",
                        marginRight: "20px",
                      }}
                      className="border border-solid   border-gray-900"
                      src={ imagePath + item['product'].image}
                      alt=""
                    />
                    <div style={{ marginTop: "2.5rem" }}>
                      <div style={{ fontSize: "1.3rem" }}>{item['product'].englishProductName}</div>
                      {/* <div style={{ fontSize: "1.3rem" }}>{item['product']. } </div> */}
                      <div style={{ fontSize: "1.3rem" }}>${item['product'].price}</div>

                      <div
                        style={{
                          height: "20px",
                          backgroundColor: "",
                          marginTop: "1.8rem",
                          display: "flex",
                        }}
                      >
                        <svg
                          onClick=
                          {(e) => {
                            //item.number--,
                              //</div>item.number == 0
                             IncreaseQty(e ,item.id)
                                //: newPrice(item.id);
                          }}
                          style={{ cursor: "pointer", marginRight: "20px" }}
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="7123"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M512 938.666667c235.637333 0 426.666667-191.029333 426.666667-426.666667S747.637333 85.333333 512 85.333333 85.333333 276.362667 85.333333 512s191.029333 426.666667 426.666667 426.666667zM352 480h320a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
                            fill="#000000"
                            p-id="7124"
                          ></path>
                        </svg>
                        <span
                          style={{
                            marginRight: "20px",
                            fontSize: "1.2 rem",
                            lineHeight: "160%",
                          }}
                        >
                           
                        </span>
                        <svg
                          style={{ cursor: "pointer" }}
                          // onClick={() => {
                          //   item.number++,
                          //     ( item.totalPrice = item.number * item.price),
                          //     newPrice(this, index),
                          //     this.setState(item);
                          // }}
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="2762"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z"
                            p-id="2763"
                            fill="#c62afa"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      border: "0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    {item.isConcern ? (
                      <svg
                        name="trueConcern"
                        // onClick={() => {
                        //   (item.isConcern = !item.isConcern),
                        //     this.setState(item);
                        // }}
                        style={{ cursor: "pointer" }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2804"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                          fill="#E5404F"
                          p-id="2805"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        name="falseConcern"
                        // onClick={() => {
                        //   (item.isConcern = !item.isConcern),
                        //     this.setState(item);
                        // }}
                        style={{ cursor: "pointer" }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2804"
                        width="24"
                        height="128"
                      >
                        <path
                          d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z"
                          fill="#000000"
                          p-id="2805"
                        ></path>
                      </svg>
                    )}{" "}
                    <div>
                      <div
                        style={{ color: "rgb(0,116,185)", fontSize: "1.2rem" }}
                      >
                        
                      </div>
                      <div
                        onClick={(e) => {
                          DeleteProduct(item.id)

                        }}
                        style={{
                          cursor: "pointer",
                          marginTop: "10px",
                          marginLeft: "-15px",
                          color: "red",
                        }}
                      >
                        <svg
                          style={{ display: "inline-block" }}
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="4004"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M380.565633 84.168898C391.492953 73.241577 412.883938 64.383234 428.328892 64.383234L596.182087 64.383234C611.633685 64.383234 633.010015 73.233567 643.945345 84.168898L680.111776 120.335329 344.399202 120.335329 380.565633 84.168898Z"
                            fill="#FC5143"
                            p-id="4005"
                          ></path>
                          <path
                            d="M875.944112 176.287425C891.394856 176.287425 903.92016 163.762122 903.92016 148.311377 903.92016 132.860633 891.394856 120.335329 875.944112 120.335329L148.566866 120.335329C133.116122 120.335329 120.590818 132.860633 120.590818 148.311377 120.590818 163.762122 133.116122 176.287425 148.566866 176.287425L875.944112 176.287425Z"
                            fill="#FC5143"
                            p-id="4006"
                          ></path>
                          <path
                            d="M180.539492 232.239521 180.254748 228.253099 228.640985 176.287425 232.637564 176.287425 280.347765 844.230242C282.63628 876.269454 312.053012 903.664671 344.377659 903.664671L680.133319 903.664671C712.845805 903.664671 741.848496 876.636282 744.163214 844.230242L791.873414 176.287425 795.869993 176.287425 844.25623 228.253099 843.971486 232.239521 180.539492 232.239521ZM847.968064 176.287425 799.973118 848.216664C795.578506 909.741242 742.362215 959.616766 680.133319 959.616766L344.377659 959.616766C282.586578 959.616766 228.909839 909.424372 224.53786 848.216664L176.542914 176.287425 847.968064 176.287425Z"
                            fill="#FC5143"
                            p-id="4007"
                          ></path>
                          <path
                            d="M484.279441 763.784431C484.279441 779.235176 496.804744 791.760479 512.255489 791.760479 527.706234 791.760479 540.231537 779.235176 540.231537 763.784431L540.231537 372.11976C540.231537 356.669016 527.706234 344.143713 512.255489 344.143713 496.804744 344.143713 484.279441 356.669016 484.279441 372.11976L484.279441 763.784431Z"
                            fill="#FC5143"
                            p-id="4008"
                          ></path>
                          <path
                            d="M607.198225 760.600957C605.851604 775.992907 617.237593 789.562199 632.629543 790.908821 648.021493 792.255442 661.590785 780.869453 662.937406 765.477503L697.073232 375.303235C698.419853 359.911285 687.033864 346.341992 671.641914 344.995371 656.249965 343.64875 642.680672 355.034739 641.334051 370.426688L607.198225 760.600957Z"
                            fill="#FC5143"
                            p-id="4009"
                          ></path>
                          <path
                            d="M361.573572 765.477503C362.920193 780.869453 376.489486 792.255442 391.881435 790.908821 407.273385 789.562199 418.659374 775.992907 417.312753 760.600957L383.176927 370.426688C381.830306 355.034739 368.261013 343.64875 352.869064 344.995371 337.477114 346.341992 326.091125 359.911285 327.437746 375.303235L361.573572 765.477503Z"
                            fill="#FC5143"
                            p-id="4010"
                          ></path>
                        </svg>
                        Delete
                      </div>
                    </div>
                    {item.isChecked ? (
                      <svg
                        onClick={() => {
                          (item.isChecked = !item.isChecked),
                            newPrice(item.id);
                        }}
                        style={{ cursor: "pointer" }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="10303"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-256a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334z"
                          p-id="10304"
                          fill="#0080F9"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        style={{ cursor: "pointer" }}
                        // onClick={() => {
                        //   (item.isChecked = !item.isChecked),
                        //     newPrice(this, index);
                        // }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1647"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M512 853.333333c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333m0-768C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z"
                          fill=""
                          p-id="1648"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Divider></Divider>
              </div>


{/* 总结 */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "90%", fontSize: "1.4rem" }}>
                  <div style={{ fontSize: "1.4rem", marginTop: "3rem" }}>
                    Summary
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Subtotal</div>
                    <div style={{ marginTop: "3rem" }}>{  }</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Sales Tax</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Delivery</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>3% Green Fee</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem", fontSize: "2rem" }}>
                      Total
                      <span style={{ fontSize: "1.4rem", marginLeft: "5px" }}>
                        (Taxes and Delivery Fee excluded)
                      </span>
                     
                    </div>
                    <div style={{ marginTop: "3rem", fontSize: "2rem" }}>
                      $ {    }
                    </div>
                  </div>
                </div>
              </div>



{/* check 按钮 */}
              <div>
                
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem",
                    marginBottom: "5rem",
                  }}
                >
                   
                  {" "}
                  <Link href="/member/orderConfirm" className="no-underline">
                  <div
                    style={{
                      cursor: "pointer",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      width: "15rem",
                      height: "5rem",
                      backgroundColor: "black",
                      color: "white",
                      textAlign: "center",
                      fontSize: "1.5rem",
                      lineHeight: "5rem",
                    }}
                  >
                    Checkout
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <HelpCenter></HelpCenter>
        </div>
      </>
    );





    async function DeleteProduct(cartId: any) {
       
      console.log(cartId)

      // const value = e.target.value;
      // console.log(value)       
        const postData = {
          cartId: cartId,
        };
        const res = await fetch("/api/product/delete", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });
        const data = await res.json();
        if (data.status === 200) {
           console.log('test');
           window.location.reload();

         // setValue(true);
        } else {
          alert("something went wrong");
        }
      
      // else {
      //   const sednData = {
      //     cartId: cartId,
      //     qty:  value,
      //   };
      //   const res = await fetch("/api/product/cart-quantity", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(sednData),
      //   });
      //   const data = await res.json();
      //   if (data.status == 200) {
      //   }
      // }
    
    const redirectToCheckOut = () => {
      const { data: sessionData } = useSession();
      const router = useRouter();
    
      if (sessionData) {
        router.push("/checkout");
      } else {
        alert("login required");
      }
    };
    }
    

    async function IncreaseQty(e: any, cartId: any) {
       
      const value = e.target.value;
      // console.log(value)       
        
    
        const sednData = {
          cartId: cartId,
          qty:  value,
        };
        const res = await fetch("/api/product/cart-quantity", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sednData),
        });
        const data = await res.json();
        if (data.status == 200) {
        }
       
    
     const redirectToCheckOut = () => {
      const { data: sessionData } = useSession();
      const router = useRouter();
    
      if (sessionData) {
        router.push("/checkout");
      } else {
        alert("login required");
      }
     };
    }
    
    
  
}

const newTotalPrice = (that: any) => {
  let temp = 0;
  for (let i = 0; i < that.state.shoppingCartListData.length; i++) {
    if (that.state.shoppingCartListData[i].isChecked) {
      temp += that.state.shoppingCartListData[i].totalPrice;
    }
  }

  that.state.Total = temp;
  that.setState(that.state);
};
const newPrice = (  cartId: any) => {
  // that.state.shoppingCartListData[index].totalPrice =
  //   that.state.shoppingCartListData[index].number *
  //   that.state.shoppingCartListData[index].price;
  // newTotalPrice(that);
};
const Delete = (that: any,  index: any) => {
//  newPrice(that, index);

 // that.state.shoppingCartListData.splice(index, 1);
 // that.setState(that.state.shoppingCartListData);
};
 


export default ShoppingCart;

