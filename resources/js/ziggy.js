const Ziggy = {"url":"https:\/\/serenity.test","port":null,"defaults":{},"routes":{"horizon.stats.index":{"uri":"jobs\/api\/stats","methods":["GET","HEAD"]},"horizon.workload.index":{"uri":"jobs\/api\/workload","methods":["GET","HEAD"]},"horizon.masters.index":{"uri":"jobs\/api\/masters","methods":["GET","HEAD"]},"horizon.monitoring.index":{"uri":"jobs\/api\/monitoring","methods":["GET","HEAD"]},"horizon.monitoring.store":{"uri":"jobs\/api\/monitoring","methods":["POST"]},"horizon.monitoring-tag.paginate":{"uri":"jobs\/api\/monitoring\/{tag}","methods":["GET","HEAD"]},"horizon.monitoring-tag.destroy":{"uri":"jobs\/api\/monitoring\/{tag}","methods":["DELETE"],"wheres":{"tag":".*"}},"horizon.jobs-metrics.index":{"uri":"jobs\/api\/metrics\/jobs","methods":["GET","HEAD"]},"horizon.jobs-metrics.show":{"uri":"jobs\/api\/metrics\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.queues-metrics.index":{"uri":"jobs\/api\/metrics\/queues","methods":["GET","HEAD"]},"horizon.queues-metrics.show":{"uri":"jobs\/api\/metrics\/queues\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.index":{"uri":"jobs\/api\/batches","methods":["GET","HEAD"]},"horizon.jobs-batches.show":{"uri":"jobs\/api\/batches\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.retry":{"uri":"jobs\/api\/batches\/retry\/{id}","methods":["POST"]},"horizon.pending-jobs.index":{"uri":"jobs\/api\/jobs\/pending","methods":["GET","HEAD"]},"horizon.completed-jobs.index":{"uri":"jobs\/api\/jobs\/completed","methods":["GET","HEAD"]},"horizon.silenced-jobs.index":{"uri":"jobs\/api\/jobs\/silenced","methods":["GET","HEAD"]},"horizon.failed-jobs.index":{"uri":"jobs\/api\/jobs\/failed","methods":["GET","HEAD"]},"horizon.failed-jobs.show":{"uri":"jobs\/api\/jobs\/failed\/{id}","methods":["GET","HEAD"]},"horizon.retry-jobs.show":{"uri":"jobs\/api\/jobs\/retry\/{id}","methods":["POST"]},"horizon.jobs.show":{"uri":"jobs\/api\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.index":{"uri":"jobs\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"}},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"splade.eventRedirect":{"uri":"_splade\/eventRedirect\/{uuid}","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"login.store":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"register.store":{"uri":"register","methods":["POST"]},"verification.notice":{"uri":"email\/verify\/prompt","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verify\/store","methods":["POST"]},"user-profile-information.update":{"uri":"user\/profile\/update","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.create":{"uri":"user\/password\/confirm","methods":["GET","HEAD"]},"password.confirmation":{"uri":"user\/password\/status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/password\/confirm","methods":["POST"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"two-factor.challenge":{"uri":"two-factor-challenge","methods":["POST"]},"two-factor.enable":{"uri":"user\/two-factor\/authentication","methods":["POST"]},"two-factor.confirm":{"uri":"user\/two-factor\/confirmed","methods":["POST"]},"two-factor.disable":{"uri":"user\/two-factor\/authentication","methods":["DELETE"]},"two-factor.qr-code":{"uri":"user\/two-factor\/code","methods":["GET","HEAD"]},"two-factor.secret-key":{"uri":"user\/two-factor\/secret-key","methods":["GET","HEAD"]},"two-factor.recovery-codes":{"uri":"user\/two-factor\/recovery\/codes","methods":["GET","HEAD"]},"two-factor.store":{"uri":"user\/two-factor\/recovery\/codes","methods":["POST"]},"terms.show":{"uri":"terms-of-service","methods":["GET","HEAD"]},"policy.show":{"uri":"privacy-policy","methods":["GET","HEAD"]},"profile.show":{"uri":"user\/profile","methods":["GET","HEAD"]},"other-browser-sessions.destroy":{"uri":"user\/browsers\/delete","methods":["DELETE"]},"current-user-photo.destroy":{"uri":"user\/profile-photo","methods":["DELETE"]},"current-user.destroy":{"uri":"user","methods":["DELETE"]},"api-tokens.index":{"uri":"user\/api-tokens","methods":["GET","HEAD"]},"api-tokens.store":{"uri":"user\/api-tokens","methods":["POST"]},"api-tokens.edit":{"uri":"user\/api-tokens\/{token}","methods":["GET","HEAD"]},"api-tokens.update":{"uri":"user\/api-tokens\/{token}","methods":["PUT"]},"api-tokens.destroy":{"uri":"user\/api-tokens\/{token}","methods":["DELETE"]},"teams.create":{"uri":"teams\/create","methods":["GET","HEAD"]},"teams.store":{"uri":"teams","methods":["POST"]},"teams.show":{"uri":"teams\/{team}","methods":["GET","HEAD"]},"teams.update":{"uri":"teams\/{team}","methods":["PUT"]},"teams.destroy":{"uri":"teams\/{team}","methods":["DELETE"]},"current-team.update":{"uri":"current-team","methods":["PUT"]},"team-members.store":{"uri":"teams\/{team}\/members","methods":["POST"]},"team-members.edit":{"uri":"teams\/{team}\/members\/{user}","methods":["GET","HEAD"]},"team-members.update":{"uri":"teams\/{team}\/members\/{user}","methods":["PUT"]},"team-members.destroy":{"uri":"teams\/{team}\/members\/{user}","methods":["DELETE"]},"team-invitations.accept":{"uri":"teams\/invitations\/{invitation}","methods":["GET","HEAD"]},"team-invitations.destroy":{"uri":"teams\/invitations\/{invitation}","methods":["DELETE"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"splade.confirmedPasswordStatus":{"uri":"_splade\/confirmPassword","methods":["GET","HEAD"]},"splade.confirmPassword":{"uri":"_splade\/confirmPassword","methods":["POST"]},"splade.table.bulkAction":{"uri":"_splade\/table\/action\/{table}\/{action}\/{slug}","methods":["POST"]},"splade.table.export":{"uri":"_splade\/table\/export\/{table}\/{export}\/{slug}","methods":["GET","HEAD"]},"splade.fileUpload.store":{"uri":"_splade\/fileUpload","methods":["POST"]},"splade.fileUpload.delete":{"uri":"_splade\/fileUpload","methods":["DELETE"]},".__construct":{"uri":"__construct","methods":["GET","HEAD"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
