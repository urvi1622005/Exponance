import React from 'react';
import img8 from '../assets/img8.png'; // Adjust the path as per your actual file structure
import { background } from '@chakra-ui/react';
import { color } from 'framer-motion';

function Navigate() {
    const tableData = [
        ['Company', 'Help', 'Resources'],
        ['About', 'Customer Support', 'Free E-books'],
        ['Features', 'Delivery details', 'Development Tutorial'],
        ['Works', 'Terms and conditions', 'How to blog'],
        ['Career', 'Privacy policy', 'YouTube playlist']
    ];

    const styles = {
        resources: {
            padding: '20px',
            backgroundColor: 'white', 
            color: 'Black',
            textAlign:'start',
            
            
        },
        imageandtext: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px'
        },
        text5: {
            fontSize: '50px',
            marginBottom: '-40px',
            textAlign:'Start',
            marginRight:"800px",
            marginTop:"100px",
        },
        getStartedButton: {
            padding: '10px 20px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '18px'
        },
        text6: {
            fontSize: '18px',
            marginTop: '10px'
        },
        image5: {
            height: '400px',
            width: '400px',
            objectFit: 'cover',
            marginTop: '-290px',
            marginLeft:'800px',
        },
        info: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '60px',
            backgroundColor: 'black',
            maxWidth: '100%',
        },
        table: {
            borderCollapse: 'collapse', 
            maxWidth: '100%',
            margin: 'auto', 
            backgroundColor: 'black',
            
        },
        td: {
            padding: '10px 100px',
            textAlign: 'center',
            color: 'white',
            fontSize: '20px',
            border: 'none' 
        },
        install: {
            fontSize: '22px',
            marginBottom: '10px',
            backgroundColor: 'black',
            color: 'white',
        },
        imagelast: {
            cursor: 'pointer',
            backgroundColor:'black',
        }
    };

    return (
        <div style={styles.resources}>
            <div style={styles.imageandtext}>
                <div style={styles.text5}>
                    Navigate Borrowing with <br /> Confidence
                    <br />
                    <button style={styles.getStartedButton}>Get Started</button>
                    <div style={styles.text6}>Built in Analytics to Track your Finance. <br/> Lorem ipsum dolor sit amet consectetur.<br/> Lorem ipsum dolor sit amet consectetur.<nr/></div>
                </div>
                <img
                    style={styles.image5}
                    src="src/assets/Other 17.png"
                    alt="Description of image"
                />
            </div>
          
            <div style={styles.info}>
                <table style={styles.table}>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cellData, colIndex) => (
                                    <td key={colIndex} style={styles.td}>
                                        {React.isValidElement(cellData) ? cellData : cellData}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <div style={styles.install}>Install App</div>
                    <img src={img8} alt="Entry 8" style={styles.imagelast} />
                </div>
            </div>
        </div>
    );
}

export default Navigate;
