export function emailVerificationView(token: string): string {

    const link = `${process.env.BACKEND_URL}/user/verifyUser/${token}`;
  
    let temp = `
       <div style="max-width: 700px;margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
       <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to Airtime to Cash POD H.</h2>
        <p>Hi there, Follow the link by clicking on the button to verify your email
        </p>
         <a href=${link}style="background: crimson; text-decoration: none; color: white;padding: 10px 20px; margin: 10px 0;display: inline-block;">Click Here</a>
         </div>
  `;
    return temp;
  
  }