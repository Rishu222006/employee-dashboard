
const admin = [
    {
        id: 1,
        name: "Rishabh",
        email: "admin@example.com",
        password: "123"
    }
]


const employees = [
    {
        id: 1,
        name: "Gaurav",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Prepare Project Report",
                description: "Draft the monthly project report and submit it to the manager.",
                date: "2025-09-02",
                category: "Work",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Team Meeting",
                description: "Attend weekly sync-up meeting with the team.",
                date: "2025-09-03",
                category: "Meetings",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Fix Login Bug",
                description: "Resolve the issue with incorrect login validation.",
                date: "2025-09-05",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCount: {
            newTask: 1,
            active: 2,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 2,
        name: "Abhishek",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Update Documentation",
                description: "Revise and update user documentation for the new release.",
                date: "2025-09-01",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Client Presentation",
                description: "Prepare slides for the upcoming client demo.",
                date: "2025-09-04",
                category: "Work",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Debug API Errors",
                description: "Check logs and resolve errors in payment API.",
                date: "2025-09-06",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Write Unit Tests",
                description: "Add test cases for new feature implementations.",
                date: "2025-09-07",
                category: "Testing",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ],
        taskCount: {
            newTask: 3,
            active: 2,
            completed: 1,
            failed: 2
        }
    },
    {
        id: 3,
        name: "Mridul",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Code Review",
                description: "Review pull requests from team members.",
                date: "2025-09-02",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Research New Tools",
                description: "Investigate project management tools for team collaboration.",
                date: "2025-09-03",
                category: "Research",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Database Backup",
                description: "Ensure weekly backup of production database.",
                date: "2025-09-04",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCount: {
            newTask: 1,
            active: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 4,
        name: "Nehal",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "UI Redesign",
                description: "Work on improving dashboard UI based on feedback.",
                date: "2025-09-05",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Update Dependencies",
                description: "Upgrade outdated npm packages in the project.",
                date: "2025-09-06",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Bug Triage",
                description: "Go through backlog and prioritize reported issues.",
                date: "2025-09-07",
                category: "Work",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Security Audit",
                description: "Run security checks on recent code changes.",
                date: "2025-09-08",
                category: "Security",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ],
        taskCount: {
            newTask: 1,
            active: 2,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 5,
        name: "Tanya",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Optimize Queries",
                description: "Improve slow-running SQL queries.",
                date: "2025-09-02",
                category: "Database",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Performance Testing",
                description: "Run load tests on the new API endpoints.",
                date: "2025-09-03",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Refactor Code",
                description: "Refactor authentication module for better readability.",
                date: "2025-09-04",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Knowledge Sharing Session",
                description: "Host a knowledge-sharing session with the team.",
                date: "2025-09-06",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ],
        taskCount: {
            newTask: 0,
            active: 2,
            completed: 3,
            failed: 1
        }
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    try {
        const storedEmployees = localStorage.getItem('employees');
        const storedAdmin = localStorage.getItem('admin');

        const employees = storedEmployees ? JSON.parse(storedEmployees) : [];
        const admin = storedAdmin ? JSON.parse(storedAdmin) : [];

        return { employees, admin };
    } catch (error) {
        console.error('Error parsing localStorage data:', error);
        return { employees: [], admin: [] };
    }
}