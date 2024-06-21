import React from 'react';

function Unlock() {
  const styles = {
    unlock: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#000',
      padding: '20px',
      borderRadius: '0 0 0 400px',
      width: '100%',
      maxWidth: '100%', 
      margin: 'auto',
      color: '#fff',

    },
    image3: {
      borderRadius: '10px',
      marginRight: '-20px',
      marginLeft: '200px',
      flexShrink: 0, 
    },
    textContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    text3: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'right',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: '400px',
      marginTop: '50px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '0px',
      marginLeft: '600px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    text4: {
      fontSize: '1rem',
      color: '#aaa',
      marginTop: '20px',
      marginLeft: '400px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.unlock}>
      <img
        style={styles.image3}
        src='src/assets/Other 12.png'
        height={400}
        width={400}
        alt="Description of image"
      />
      <div style={styles.textContainer}>
        <div style={styles.text3}>
          "Unlock Financial <br />
          Freedom: Empowering <br />
          You to Conquer Debt"
        </div>
        <button
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        >
          Get Started
        </button>
        <div style={styles.text4}>
          Built-in Analytics to Track your Finance. <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing. <br/>
          Lorem ipsum dolor sit amet consectetur.<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        </div>
      </div>
    </div>
  );
}

export default Unlock;
