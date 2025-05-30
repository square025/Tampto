 
    const admins = [
        { id: 1, firstName: 'Super', lastName: 'Admin', email: 'super@admin.com', password: 'super123', role: 'super-admin', lastLogin: null },
        { id: 2, firstName: 'Regular', lastName: 'Admin', email: 'admin@admin.com', password: 'admin122', role: 'admin', lastLogin: null }
    ];

   
    const registrations = [
    ];

    const contributions = [
    ];

    const notifications = []; 

 
    let currentUser = null;

   
    const loginContainer = document.getElementById('login-container');
    const adminPanel = document.getElementById('admin-panel');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const currentUserRole = document.getElementById('current-user-role');
    const adminManagement = document.getElementById('admin-management');
    const adminManagementMenuItem = document.getElementById('admin-management-menu-item');
    const addAdminBtn = document.getElementById('add-admin-btn');
    const adminsTable = document.getElementById('admins-table');
    const adminsBody = document.getElementById('admins-body');
    const addAdminForm = document.getElementById('add-admin-form');
    const addAdminModal = document.getElementById('add-admin-modal');

   
    const registeredUsersCount = document.getElementById('registered-users-count');
    const contributorsCount = document.getElementById('contributors-count'); 
    const totalContributionsAmount = document.getElementById('total-contributions-amount');
    const adminsCount = document.getElementById('admins-count');
    const newNotificationsCount = document.getElementById('new-notifications-count');
const adminCounterCard = document.getElementById('admin-counter-card');

   
    const registrationsBody = document.getElementById('registrations-body');
    const contributionsBody = document.getElementById('contributions-body');
    const allUsersBody = document.getElementById('all-users-body');
    const allContributionsBody = document.getElementById('all-contributions-body');
    const allAdminsBody = document.getElementById('all-admins-body');
    const notificationsBody = document.getElementById('notifications-body');

   
    const addRegistrationModal = document.getElementById('add-registration-modal');
    const addRegistrationBtn = document.getElementById('add-registration-btn');
    const addRegistrationForm = document.getElementById('add-registration-form');

    const addContributionModal = document.getElementById('add-contribution-modal');
    const addContributionBtn = document.getElementById('add-contribution-btn');
    const addContributionForm = document.getElementById('add-contribution-form');

    const mainContentTitle = document.getElementById('main-content-title');
    let notificationShown = false;


   
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
       
        const admin = admins.find(a => a.email === email && a.password === password);
        
        if (admin) {
           
            admin.lastLogin = new Date().toLocaleString();
            currentUser = admin;
           
            loginContainer.style.display = 'none';
            adminPanel.style.display = 'flex';

           
            currentUserRole.textContent = admin.role === 'super-admin' ? 'Super Admin' : 'Admin';
            
      
            updateUIAccessByRole(admin.role);
            
           
            loadDashboardData();
            loadRecentRegistrations();
            loadRecentContributions();
            
         
            showSection('dashboard');

            notificationShown = true;
            showNotification('Login successful', `Welcome back, ${admin.firstName}!`, 'success');
        } else {
            showNotification('Login failed', 'Invalid email or password', 'danger');
        }
    });

  
    logoutBtn.addEventListener('click', function() {
        showNotification('Logged out', `Goodbye, ${currentUser.firstName}!`, 'warning');
        currentUser = null;
        loginContainer.style.display = 'flex';
        adminPanel.style.display = 'none';
        
       
        loginForm.reset();
        
        // registeredUsersCount.textContent = '0';
        // totalContributionsAmount.textContent = 'Tshs ' + Number(totalAmount).toLocaleString();
       
        adminsCount.textContent = '0';
        newNotificationsCount.textContent = '0';
     

        registrationsBody.innerHTML = '';
        contributionsBody.innerHTML = '';
        // allUsersBody.innerHTML = '';
        // allContributionsBody.innerHTML = '';
        adminsBody.innerHTML = '';
        allAdminsBody.innerHTML = '';
        notificationsBody.innerHTML = '';
       
        notifications.length = 0;
    });

    
    function updateUIAccessByRole(role) {
     
        if (role === 'super-admin') {
            adminManagementMenuItem.style.display = 'block';
            adminManagement.style.display = 'block'; 
             adminCounterCard.style.display = 'block'; 
            addAdminBtn.style.display = 'inline-block'; 
        } else {
            adminManagementMenuItem.style.display = 'none';
            adminManagement.style.display = 'none'; 
            addAdminBtn.style.display = 'none';
             adminCounterCard.style.display = 'none'; 
            
        }

    }

    function loadDashboardData() {
        // registeredUsersCount.textContent = registrations.length;
        const totalAmount = contributions.reduce((sum, c) => sum + c.amount, 0).toFixed(2);
        // totalContributionsAmount.textContent = 'Tshs ' + totalAmount;
       
        adminsCount.textContent = admins.length;
     
        newNotificationsCount.textContent = notifications.filter(n => n.status === 'unread').length;
    }

    function loadRecentRegistrations() {
        // registrationsBody.innerHTML = '';
      
        const recent = registrations.slice(-5).reverse(); 
        recent.forEach(reg => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reg.id}</td>
                <td>${reg.firstName}</td>
                <td>${reg.lastName}</td>
                <td>${reg.email}</td>
                <td>${reg.contact}</td>
                <td>$${reg.ticketPrice.toFixed(2)}</td>
                <td>${reg.date}</td>
            `;
            registrationsBody.appendChild(row);
        });
    }

    function loadRecentContributions() {
        // contributionsBody.innerHTML = '';
    
        const recent = contributions.slice(-5).reverse();
        recent.forEach(con => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${con.id}</td>
                <td>${con.firstName}</td>
                <td>${con.lastName}</td>
                <td>${con.email}</td>
                <td>${con.contact}</td>
                <td>$${con.amount.toFixed(2)}</td>
                <td>${con.paymentMethod}</td>
            `;
            contributionsBody.appendChild(row);
        });
    }
    function loadAllUsers() {
        // allUsersBody.innerHTML = '';
        registrations.forEach(reg => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${reg.id}</td>
                <td>${reg.firstName}</td>
                <td>${reg.lastName}</td>
                <td>${reg.email}</td>
                <td>${reg.contact}</td>
                <td>$${reg.ticketPrice.toFixed(2)}</td>
                <td>${reg.date}</td>
            `;
            allUsersBody.appendChild(row);
        });
    }

    function loadAllContributions() {
        // allContributionsBody.innerHTML = '';
        contributions.forEach(con => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${con.id}</td>
                <td>${con.firstName}</td>
                <td>${con.lastName}</td>
                <td>${con.email}</td>
                <td>${con.contact}</td>
                <td>$${con.amount.toFixed(2)}</td>
                <td>${con.paymentMethod}</td>
            `;
            allContributionsBody.appendChild(row);
        });
    }
    function loadAdmins() {
       
  
        
        adminsBody.innerHTML = ''; 
        allAdminsBody.innerHTML = '';

        admins.forEach(admin => {
            const rowHtml = `
                <td>${admin.id}</td>
                <td>${admin.firstName}</td>
                <td>${admin.lastName}</td>
                <td>${admin.email}</td>
                <td>${admin.role === 'super-admin' ? 'Super Admin' : 'Admin'}</td>
                <td>${admin.lastLogin || 'Never'}</td>
                <td>
                    ${currentUser && currentUser.role === 'super-admin' && admin.id !== currentUser.id ? 
                        `<button class="btn btn-danger btn-sm delete-admin" data-id="${admin.id}">
                            <i class="fas fa-trash"></i> Delete
                        </button>` : 
                        `<span class="badge badge-primary">${admin.id === currentUser.id ? 'Current User' : 'N/A'}</span>`}
                </td>
            `;
            
        
            const dashRow = document.createElement('tr');
            dashRow.innerHTML = rowHtml;
            adminsBody.appendChild(dashRow);

            const fullAdminRow = document.createElement('tr');
            fullAdminRow.innerHTML = rowHtml;
            allAdminsBody.appendChild(fullAdminRow);
        });
     
        document.querySelectorAll('.delete-admin').forEach(btn => {
            btn.addEventListener('click', function() {
                const adminId = parseInt(this.getAttribute('data-id'));
                deleteAdmin(adminId);
            });
        });

    
        adminsCount.textContent = admins.length;
    }

    function loadNotifications() {
    notificationsBody.innerHTML = '';
    notifications.forEach(notif => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${notif.id}</td>
            <td><span class="badge badge-${notif.type === 'new-registration' ? 'success' : 'warning'}">${notif.type === 'new-registration' ? 'Registration' : 'Contribution'}</span></td>
            <td>${notif.message}</td>
            <td>${notif.date}</td>
            <td>
                <span 
                    class="badge badge-${notif.status === 'read' ? 'primary' : 'danger'} notification-status-badge"
                    style="cursor:pointer"
                    data-id="${notif.id}"
                >
                    ${notif.status === 'read' ? 'Read' : 'Unread'}
                </span>
            </td>
        `;
        notificationsBody.appendChild(row);
    });

    document.querySelectorAll('.notification-status-badge').forEach(badge => {
        badge.addEventListener('click', function() {
            const notifId = parseInt(this.getAttribute('data-id'));
            const notif = notifications.find(n => n.id === notifId);
            if (notif && notif.status === 'unread') {
                notif.status = 'read';
                loadNotifications();
            }
        });
    });

    newNotificationsCount.textContent = notifications.filter(n => n.status === 'unread').length;
}


    addAdminBtn.addEventListener('click', function() {
        if (currentUser && currentUser.role === 'super-admin') {
            addAdminModal.style.display = 'flex';
        } else {
            showNotification('Access Denied', 'Only Super Admins can add new admins.', 'danger');
        }
    });

    addAdminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (currentUser && currentUser.role === 'super-admin') {
            const newAdmin = {
                id: admins.length > 0 ? Math.max(...admins.map(a => a.id)) + 1 : 1, 
                firstName: document.getElementById('admin-first-name').value,
                lastName: document.getElementById('admin-last-name').value,
                email: document.getElementById('admin-email').value,
                password: document.getElementById('admin-password').value,
                role: document.getElementById('admin-role').value,
                lastLogin: null
            };
            
            admins.push(newAdmin);
            loadAdmins(); 
            addAdminModal.style.display = 'none';
            addAdminForm.reset();
            
            showNotification('Success', 'New admin added successfully', 'success');
        } else {
            showNotification('Error', 'You do not have permission to perform this action.', 'danger');
        }
    });

  
    function deleteAdmin(id) {
        if (!currentUser || currentUser.role !== 'super-admin') {
            showNotification('Access Denied', 'Only Super Admins can delete admins.', 'danger');
            return;
        }
        
        if (id === currentUser.id) {
            showNotification('Error', 'You cannot delete your own admin account.', 'danger');
            return;
        }

        const index = admins.findIndex(a => a.id === id);
        if (index !== -1) {
            admins.splice(index, 1);
            loadAdmins(); 
            showNotification('Success', 'Admin deleted successfully', 'success');
        }
    }

  
    addRegistrationBtn.addEventListener('click', function() {
        addRegistrationModal.style.display = 'flex';
    });

    addRegistrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newRegistration = {
            id: registrations.length > 0 ? Math.max(...registrations.map(r => r.id)) + 1 : 1, 
            firstName: document.getElementById('reg-first-name').value,
            lastName: document.getElementById('reg-last-name').value,
            email: document.getElementById('reg-email').value,
            contact: document.getElementById('reg-contact').value,
            ticketPrice: parseFloat(document.getElementById('reg-ticket-price').value),
            date: new Date().toISOString().slice(0, 10) 
        };
        registrations.push(newRegistration);
        loadDashboardData();
        loadRecentRegistrations();
        loadAllUsers(); 
        addRegistrationModal.style.display = 'none';
        addRegistrationForm.reset();

    
        const notificationMessage = `New user registered: ${newRegistration.firstName} ${newRegistration.lastName}`;
        notifications.push({
            id: notifications.length > 0 ? Math.max(...notifications.map(n => n.id)) + 1 : 1,
            type: 'new-registration',
            message: notificationMessage,
            date: new Date().toLocaleString(),
            status: 'unread'
        });
        loadNotifications();
        showNotification('New Registration!', notificationMessage, 'success');
    });

    
    addContributionBtn.addEventListener('click', function() {
        addContributionModal.style.display = 'flex';
    });

    addContributionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newContribution = {
            id: contributions.length > 0 ? Math.max(...contributions.map(c => c.id)) + 1 : 1, 
            firstName: document.getElementById('con-first-name').value,
            lastName: document.getElementById('con-last-name').value,
            email: document.getElementById('con-email').value,
            contact: document.getElementById('con-contact').value,
            amount: parseFloat(document.getElementById('con-amount').value),
            paymentMethod: document.getElementById('con-payment-method').value
        };
        contributions.push(newContribution);
        loadDashboardData();
        loadRecentContributions();
        loadAllContributions(); 
        addContributionModal.style.display = 'none';
        addContributionForm.reset();

       
        const notificationMessage = `New contribution of $${newContribution.amount.toFixed(2)} from ${newContribution.firstName} ${newContribution.lastName}`;
        notifications.push({
            id: notifications.length > 0 ? Math.max(...notifications.map(n => n.id)) + 1 : 1,
            type: 'new-contribution',
            message: notificationMessage,
            date: new Date().toLocaleString(),
            status: 'unread'
        });
        loadNotifications();
        showNotification('New Contribution!', notificationMessage, 'warning');
    });

    
    function showNotification(title, message, type) {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${type === 'success' ? 'check' : type === 'danger' ? 'times' : 'exclamation'}"></i>
            </div>
            <div class="notification-content">
                <h5>${title}</h5>
                <p>${message}</p>
            </div>
            <div class="close-notification">&times;</div>
        `;
        
        container.appendChild(notification);
        
     
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s forwards';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
        
       
        notification.querySelector('.close-notification').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.5s forwards';
            setTimeout(() => notification.remove(), 500);
        });
    }

   
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

   
    function showSection(sectionName) {
       
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

       
        const targetSection = document.getElementById(sectionName + '-section');
        if (targetSection) {
            targetSection.style.display = 'block';
           
            const menuItem = document.querySelector(`.sidebar-menu li[data-section="${sectionName}"] span`);
            if (menuItem) {
                mainContentTitle.textContent = menuItem.textContent;
            } else {
                mainContentTitle.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
            }
        }

      
        if (sectionName === 'users') {
            loadAllUsers();
        } else if (sectionName === 'contributions') {
            loadAllContributions();
        } else if (sectionName === 'admins') {
            loadAdmins(); 
        } else if (sectionName === 'notifications') {
            loadNotifications();
        }
        if (sectionName === 'dashboard') {
            loadDashboardData();
            loadRecentRegistrations();
            loadRecentContributions();
            loadAdmins(); 
        }
    }

   
    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', function() {
       
            if (this.id === 'logout-btn') {
                return;
            }
            document.querySelectorAll('.sidebar-menu li').forEach(i => {
                i.classList.remove('active');
            });
            this.classList.add('active');
            
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });


function fetchAll(){
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    let reBody = document.querySelector("#registrations-body");
    let coBody = document.querySelector("#contributions-body");
    let xhr = new XMLHttpRequest();
    console.log(getCookie('csrftoken'));
    xhr.open("POST", "/get-db/", true);
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status == 200 && xhr.readyState == 4){
            let totalContributions = 0;

            setTimeout(()=>{
                let jsonRSP = JSON.parse(xhr.responseText);
                let jisajili = jsonRSP.jisajili;
                let jisajiliMain = document.querySelector("#all-users-body");
                jisajili.forEach(sajili=>{
                    let previousSajili = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                    let newTimeout = setInterval(()=>{
                        if(!previousSajili.includes(sajili) && notificationShown){
                            notificationShown = false;
                            showNotification("New User Registered.", `User with email ${sajili[3]} was registered successfully!!!`, "success")
                        }else if(previousSajili.includes(sajili) && !notificationShown){
                            clearInterval(newTimeout);
                        };
                    }, 1000);
                    console.log(sajili[10].split("/")[1]);
                    let innerHtml = `<tr>
                        <td>${sajili[0]}</td>
                        <td>${sajili[1]}</td>
                        <td>${sajili[2]}</td>
                        <td>${sajili[3]}</td>
                        <td>${sajili[4]}</td>
                        <td>${sajili[5]}</td>
                        <td>${["TSH.20,000", "TSH.40,000"][sajili[8]]}</td>
                        <td>${sajili[9]}</td></tr>
                        <td><img src="../media/${sajili[10].split("/")[1]}"></td></tr>`
                    let tr = document.createElement("tr");
                    tr.innerHTML = innerHtml;
                    reBody.appendChild(tr);
                });
                jisajiliMain.innerHTML = reBody.innerHTML;
                setTimeout(()=>{
                    console.log(jisajili.length);
                    registeredUsersCount.textContent = String(jisajili.length);
                    handleImageDisplay();
                }, 1000);
            }, 1000);

            setTimeout(()=>{
                let jsonRSP = JSON.parse(xhr.responseText);
                let michango = jsonRSP.michango;
                michango.forEach(mchango=>{
                    let innerHtml = `<tr>
                        <td>${mchango[0]}</td>
                        <td>${mchango[1]}</td>
                        <td>${mchango[2]}</td>
                        <td>${mchango[3]}</td>
                        <td>${mchango[4]}</td>
                        <td>${mchango[5]}</td>
                        <td>${mchango[9]}</td>
                        <td>TZS.${mchango[6]}</td>
                        <td>${mchango[7]}</td>`
                    totalContributions += Number(mchango[6]);
                    let tr = document.createElement("tr");
                    tr.innerHTML = innerHtml;
                    coBody.appendChild(tr);
                });
                allContributionsBody.innerHTML = coBody.innerHTML;
                totalContributionsAmount.textContent = `Tsh. ${totalContributions}.00`
            }, 1000);
        }
    }
}

function handleImageDisplay(){
    const allImages = document.querySelectorAll("img");
    const imgDisplay = document.querySelector(".image-view");
    const imgView = imgDisplay.querySelector("img");
    imgDisplay.onclick = ()=>{
        imgDisplay.removeAttribute("active");
    };
    allImages.forEach(img=>{
        img.addEventListener("click", ()=>{
            imgView.src = img.src;
            imgDisplay.setAttribute("active", "");
        });
    });
}


fetchAll();