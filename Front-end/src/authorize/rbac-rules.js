//resource :action
const rules = {
    member: {
        static: [
            "initiative-page:visit",
            "account-page:vist",
            "setting-page:visit",
            "initiative:join",
            "initiative:view",
            "action:view",
            "meeting:particiapte",
            "memeber:rate"
        ],
        dynamic: {
            "year:access": ({ initiativeYear }) => {
                var d = new Date();
                var currentYear = d.getFullYear();
                if (initiativeYear !== currentYear) return false
                return true;
            }
        }
    },
    lead: {
        static: [
            "initiative-page:visit",
            "account-page:vist",
            "setting-page:visit",
            "action:add",
            "action:edit",
            "action:delete",
            "action:setDeadline",
            "action:setProgress",
            "action:addMembers ",
            "action:addComment",
            "member:rate",
            "review:participate",
            "dashboard-page:visit"
        ]
    },
    evaluator: {
        static: [
            "initiative-page:visit",
            "dashboard-page:visit",
            "setting-page:visit",
            "account-page:vist",
            "initiative:add",
            "initiative:edit",
            "initiative:delete",
            "year:add",
            "evaluationCriteria:set",
            "evaluationweight:set",
            "review:set",
            "member:add"
        ],

    },
    admin: {
        static: [
            "user-page:visit",
            "account-page:vist",
            "setting-page:visit",
            "user:add",
            "user:edit",
            "user:delete",
            "user:activate",
            "user:deactivate",
            "userRole:set",
        ]
    }
};

export default rules;