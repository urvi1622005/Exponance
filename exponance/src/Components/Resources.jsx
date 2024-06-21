

function Resources() {
  return (
    <div className="Resources">
      <div className="Resourcesand">Resources and Insights</div>
      <div className="text2">
        The latest industry news, interviews, technologies, and resources
      </div>
      

      <style>
        {`
          .Resources {
            background-color:white;
            padding: 40px;
            border-radius: 10px;
            color: black;
            text-align: center;
            margin: 0px auto;
            max-width: 100%;
          }

          .Resourcesand {
            font-size: 2.5rem;
            font-weight: boldest;
            margin-bottom: 20px;
          }

          .text2 {
            font-size: 1.2rem;
            margin-bottom: 30px;
            line-height: 1.5;
          }

          .Cards {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default Resources;
