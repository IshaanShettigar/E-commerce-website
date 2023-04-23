const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try 
    {
        const response = await fetch('/auth/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success === '1') 
        {
            alert('Login successful');
            window.location.href = '/catalogue.html';
        } 
        else {
            alert('Invalid credentials');
        }
    }catch (err) 
    {
        console.error(err);
        alert('Error while logging in');
    }
});
        
registerForm.addEventListener('submit', async (e) => 
{
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
        
    try 
    {
        const response = await fetch('/auth/register', 
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (data.success === '1') {
        alert('Registration successful');
        // Redirect to the login page
        window.location.href = '/login';
        } else {
        alert('User already exists');
        }
    } catch (err) 
    {
        console.error(err);
        alert('Error while registering');
    }
});

