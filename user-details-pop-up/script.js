document.addEventListener('DOMContentLoaded', function () {
    const userTable = document.getElementById('userTable');
    const popup = document.getElementById('popup');
    const userDetailsDiv = document.getElementById('userDetails');
  
    userTable.addEventListener('click', function (event) {
      const target = event.target;
      if (target.tagName === 'TD') {
        const userId = target.closest('tr').getAttribute('data-id');
        const userName = target.closest('tr').getAttribute('data-name');
        const userEmail = target.closest('tr').getAttribute('data-email');
  
        showPopup(userId, userName, userEmail);
      }
    });
  
    function showPopup(userId, userName, userEmail) {
      userDetailsDiv.innerHTML = `<p>ID: ${userId}</p><p>Name: ${userName}</p><p>Email: ${userEmail}</p>`;
      popup.style.display = 'block';
    }
  
    function closePopup() {
      popup.style.display = 'none';
    }
  });
  