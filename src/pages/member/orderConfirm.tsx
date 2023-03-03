import { blue } from "@mui/material/colors";
import React from "react";

import HelpCenter from "../../components/help/help-center";
import Divider from "../../components/shoppingCart/divider";

//团购-订单确认

class orderConfirm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {

      isChecked: true
    }
  }
  render() {
    return (
      <>
        <div className="orderConfirm">

          <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginTop: '20px', width: '69%', backgroundColor: '#F9f8f6' }}  >


              <div className=''>
                <div style={{ fontSize: '1.8rem', marginLeft: '3rem', marginTop: '2rem' }}> Your Shopping Cart</div>
                <div style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'rgb(0,116,186)', borderBottom: '10px soild black', textDecoration: 'underLine', margin: '3rem' }}>Sign in</div>
              </div>




            </div>
            <div style={{ marginTop: '20px', width: '69%', backgroundColor: '#F9f8f6' }}  >



              <div style={{ fontSize: '1.8rem', marginLeft: '3rem', marginTop: '2rem' }}> Your Items</div>

              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem', marginBottom: '2rem' }}>
                <Divider></Divider>
              </div>
              <div className='clear-right  divide-gray-200 divide-x-8' style={{ display: 'flex', marginBottom: '20px' }}>


                <div style={{ width: '100%', backgroundColor: '', display: 'flex', justifyContent: 'space-between' }}>


                  <div style={{ width: '50%', display: 'flex', }}>
                    <img style={{ width: '14.87rem', height: '11.6rem', borderRadius: '35px', marginTop: '30px', marginLeft: '6%', marginRight: '20px' }} className='border-solid border   border-gray-900' src="https://img2.baidu.com/it/u=1732475100,269919796&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=363" alt="" />
                    <div style={{ marginTop: '2.5rem' }}>
                      <div style={{ fontSize: '1.3rem' }} >1</div>
                      <div style={{ fontSize: '1.3rem' }} >1 | 1</div>
                      <div style={{ fontSize: '1.3rem' }} >$11</div>
                      <div style={{ marginTop: '2rem', fontSize: '1.3rem' }}>Qty:1</div>
                    </div>


                  </div>

                  <div style={{ width: '30%', textAlign: 'center', lineHeight: '14rem', color: 'rgb(0,116,185)', fontSize: '1.2rem' }}>$111</div>

                </div>



              </div>





            </div>
            <div style={{ marginTop: '20px', width: '69%', backgroundColor: '#F9f8f6' }}  >



              <div style={{ fontSize: '1.8rem', marginLeft: '3rem', marginTop: '2rem' }}>Delivery Options</div>

              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem', marginBottom: '2rem' }}>
                <Divider></Divider>
              </div>

              {/* radio */}
              <div style={{ marginLeft: '3rem' }}>

                <form >
                  <div className="radio " style={{ margin: '2rem' }}>
                    <label><input style={{ color: 'red', textIndent: '2rem' }} type="radio" defaultChecked name="optradio" />           Groops! Instant Delivery (24h guaranteed, only available in Greater Montreal at this moment)</label>
                  </div>
                  <div style={{ margin: '2rem' }} className="radio">
                    <label><input style={{ color: 'red', textIndent: '2rem' }} type="radio" name="optradio" />       Pickup (Only available in Greater Montreal at this moment)</label>
                  </div>
                  <div style={{ margin: '2rem' }} className="radio ">
                    <label><input style={{ color: 'red', textIndent: '2rem' }} type="radio" name="optradio" />     Green Shipping (Available outside Montreal)</label>
                  </div>
                </form>


              </div>

              <div style={{ marginLeft: '5rem' }}>




                <div className="input-group mb-3" style={{ width: '30%', display: 'flex', lineHeight: '3rem' }}>
                  Tips for your Deliverer  <input style={{ marginLeft: '1rem' }} type="text" className="form-control" placeholder="$" id="usr" name="username" />

                </div>

                <div style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>


                  Our deliverers try their best to give you the best services, so if you tip them they will be happy :)
                </div>
              </div>


            </div>
            <div style={{ padding: '2rem', marginTop: '20px', width: '69%', backgroundColor: '#F9f8f6' }}  >

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>


                <div style={{ width: '90%', fontSize: '1.4rem' }}>


                  <div style={{ fontSize: '1.4rem', marginTop: '3rem', }}>Mrs.xxxxx </div>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>

                    <div style={{ marginTop: '3rem', marginRight: '1.6rem' }}>Select</div>
                  </div>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                    <div style={{ width: '30%', fontSize: '1.2rem', marginLeft: '3rem' }}>
                      <div style={{}}>KJDHKJHF Ave</div>
                      <div style={{}}>Montréal QC, CANADA </div>
                      <div style={{}}>H3C 1A1</div>
                      <div style={{}}> +1 999-999-9999</div>
                    </div>


                    <div style={{ marginTop: '1 rem', width: '10%' }}>

                      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }} onClick={() => { checkOut(this) }}>

                        {this.state.isChecked ? <svg style={{ cursor: 'pointer' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10303" width="24" height="24"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-256a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334z" p-id="10304" fill="#0080F9"></path></svg>
                          : <svg style={{ cursor: 'pointer' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1647" width="24" height="24"><path d="M512 853.333333c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333m0-768C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z" fill="" p-id="1648"></path></svg>
                        }


                      </div>


                      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '2rem' }}>

                        <div style={{ color: 'rgb(23,119,177)', textDecoration: 'underline', }}>Edit  </div>
                        <div style={{ marginRight: '-2rem', color: 'rgb(245,36,36)', textDecoration: 'underline', }}>Delete</div>
                      </div>

                    </div>


                  </div>
                </div>
              </div>

            </div>
            <div>
              <div onClick={() => { }} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5rem', marginBottom: '2rem' }}>   <div style={{ cursor: 'pointer', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '15rem', height: '5rem', backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: '1.5rem', lineHeight: '5rem' }} >

                NEXT
              </div></div>

            </div>
            <div>
              <div onClick={() => { }} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '5rem' }}>   <div className="border-solid border-2 border-current  border-grey-900 " style={{ cursor: 'pointer', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '15rem', height: '5rem', backgroundColor: '', textAlign: 'center', fontSize: '1.5rem', lineHeight: '4.5rem' }} >

                New Address
              </div></div>

            </div>
          </div>



{/* 新地址 */}
<div style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

<div style={{width:'60%'}}>

<div style={{display:'flex' ,justifyContent:'space-around',width:'50%'}}>
<div > 
Shipping Address

</div>



<div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
  <label className="form-check-label">Save as your primary address</label>
</div>
</div>
</div>


<div style={{display:'flex' ,justifyContent:'center',width:'100%'}}>

                          <div style={{margin:'3rem',display:'flex' ,justifyContent:'space-around',width:'70%'}}>


                          <div className="form-check">
  <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>Option 1
  <label className="form-check-label" ></label>
</div>
<div className="form-check">
  <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Option 2
  <label className="form-check-label" ></label>
</div>
<div className="form-check">
  <input type="radio" className="form-check-input" />Option 3
  <label className="form-check-label"></label>
</div>
<div className="form-check" style={{display:'flex'}}>
  <input type="radio" className="form-check-input" />Customize

                   <input style={{ marginLeft: '1rem',marginTop:'-10px' }} type="text" className="form-control" placeholder="$" id="usr" name="username" />

          

</div>

                          </div>
</div>


</div>

</div>


          <HelpCenter ></HelpCenter>
        </div>
      </>
    );
  }
};



let checkOut = (that: any) => {


  that.state.isChecked = !that.state.isChecked
  console.log(that.state)
  that.setState(that.state)

}




export default orderConfirm;
