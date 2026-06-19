export default function About() {
  
  return (
    <main style={{ padding: "40px 20px", maxWidth: "1300px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#10092f", marginBottom: "1rem" }}>
        <strong>About this page</strong>
      </h1>
      
      <p style={{ fontSize: "1.4rem", lineHeight: "2", color: "aliceblue", backgroundColor: "#080447", padding: "20px", borderRadius: "10px", borderLeft: "5px solid #0070f3", marginBottom: "4rem" }}>
        Hi! I'm <strong>CLAIRE PANASHE</strong>, and this is a fanpage about my favourite characters in the big bang theory sitcom.
      </p>

    
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "50px" 
      }}>
        <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue"  }}>
          <strong>Sheldon Cooper</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>Bazinga! The theoretical physicist from Texas.</p>
        </div>
        
        <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue"  }}>
          <strong>Leonard Hofstadter</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>The experimental physicist and roommate from New Jersey.</p>
        </div>
        
        <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue" }}>
          <strong>Penny</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>The aspiring actress living across the hall from Omaha Nebraska.</p>
        </div>
        
        <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue"  }}>
          <strong>Howard Wolowitz</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>The aerospace engineer who went to space and he trained at MIT.</p>
        </div>
          <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue"  }}>
          <strong>Rajesh Koothrapali</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>An astrophysicist from New Delhi, India.</p>

        </div>
        <div style={{ padding: "50px", backgroundColor: "#080447", borderRadius: "10px", border: "5px solid #2e8dd6", color: "aliceblue"  }}>
          <strong>Amy Farrah Fowler</strong>
          <p style={{ margin: "5px 0 0 0", color: "aliceblue" }}>A neurobiologist from Glendale, California..</p>
          </div>
      </div>
    </main>
  );
}