async function update() {
        try {
          const res = await fetch("/api/position");
          if (!res.ok) throw new Error(res.statusText);
          const data = await res.json();

          document.getElementById("output").textContent = JSON.stringify(data, null, 2);

        } 
        catch (e) {
          document.getElementById("output").textContent =
            "Error fetching /api/position:\n" + e;
        }
      }

      update();
      setInterval(update, 2000);