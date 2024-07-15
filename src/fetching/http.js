
export const URL = {
    URL_API: "https://backend-sql-rho.vercel.app/",
}


export const HTTP = {
    GET: async (url, headers = {}) => {
        // Fetch token from localStorage just before making the request
        const token = localStorage.getItem("token");

        // Merge default headers with the provided headers
        const defaultHeaders = {
            'Authorization': token ? `Bearer ${token}` : '',  // Example of authorization header
            ...headers
        };

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: defaultHeaders
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();  // Parse JSON response
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;  // Re-throw the error to propagate it further
        }
    },


    POST: async (url, body) =>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            },
            
        body: JSON.stringify(body)
        })
        return response.json()
    },
    PUT: async (url, body) => {
        try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(body)
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          return response.json(); // Parse JSON response
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error; // Re-throw the error to propagate it further
        }
      },
      
    DELETE:async (url, headers={"Content-Type":"application/json"}) =>{
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: headers,

        })
        return response.json();

    }
}
