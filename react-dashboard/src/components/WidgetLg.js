import React from 'react'

export default function WidgetLg() {

    // const Button= ({ type }) =>{
    //     return <button className={"widgetLgButton" + type}>{type}</button>;
    // };
    const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">
                Latest Transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=" alt="" className="widgetLgImg" />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type='Approved'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=" alt="" className="widgetLgImg" />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type='Decline'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=" alt="" className="widgetLgImg" />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type='Pending'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=" alt="" className="widgetLgImg" />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type='Pending'/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=" alt="" className="widgetLgImg" />
                        <span className='widgetLgName'>Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type='Approved'/></td>
                </tr>
            </table>
        </div>
    )
}
