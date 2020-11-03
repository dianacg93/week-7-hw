// import {Users} from '../components/users.js';
// import {Issues} from '../components/issues.js';
// import {Header} from '../layouts/header.js';
// import {Sidebar} from '../layouts/sidebar.js';

// class Dashboard {
//     loadDashboard(){

//         const users = new Users();
//         const issues = new Issues();
//         const header = new Header();
//         const sidebar = new Sidebar();

//         users.loadUsers()
//         issues.loadIssues()
//         header.loadHeader()
//         sidebar.loadSidebar()

//         console.log('Dashboard component is loaded...')
//     }
// }

// export {Dashboard}

    import { users, issues } from "../components";

    import { header, sidebar } from "../layouts";
  
    class Dashboard {
      loadDashboard() {

        users.loadUsers();
        issues.loadIssues();
        header.loadHeader();
        sidebar.loadSidebar();
  
        console.log("Dashboard component loaded...");
      }
    }
  
    export let dashboard = new Dashboard();

    dashboard.loadDashboard();