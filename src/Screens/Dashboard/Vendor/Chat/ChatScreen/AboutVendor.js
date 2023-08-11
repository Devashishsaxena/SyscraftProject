import { Rating } from "@mui/material";
const AboutVendor = () => {
    return (
        <div className="project-vendor-details">
            <h5>John Doe</h5>
            <Rating name="no-value" value="4" readOnly />
            <table>
                <tr>
                    <th>Project Completed</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>12</td>
                    <td>13</td>
                </tr>
            </table>
            <a>View Profile</a>
        </div>
    )
}
export default AboutVendor;