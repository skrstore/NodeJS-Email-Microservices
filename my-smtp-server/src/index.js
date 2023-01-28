const { SMTPServer } = require('smtp-server');
const { simpleParser } = require('mailparser');

const config = {
    port: process.env.SMTP_SERVER_PORT || 12345,
};

const data = [];

const server = new SMTPServer({
    logger: false, // log to console
    banner: 'Welcome to My SMTP Server',
    disabledCommands: ['STARTTLS'], // disable STARTTLS to allow authentication in clear text mode
    size: 10 * 1024 * 1024, // Accept messages up to 10 MB. This is a soft limit

    // Setup authentication -- Allow all usernames and passwords, no account checking
    onAuth(auth, session, callback) {
        console.log('Auth ', auth);
        // console.log("AUth ", session);

        return callback(null, {
            user: { username: auth.username },
        });
    },

    // Handle message stream
    onData(stream, session, callback) {
        console.log('Streaming message from user %s', session?.user);
        console.log('------------------');
        // stream.pipe(process.stdout);
        const chunks = [];

        stream.on('readable', () => {
            let chunk;
            while (null !== (chunk = stream.read())) {
                chunks.push(chunk);
            }
        });
        stream.on('end', async () => {
            const content = chunks.join('');
            const mailObj = await simpleParser(content);
            data.push({ session, data: mailObj });
            console.log('Data ', JSON.stringify(data));
            // console.log('Content ', content);
            console.log(''); // ensure line-break after the message
            callback(null); // accept the message once the stream is ended
            // "Message queued as " + Date.now()
        });
    },
});

server.on('error', (err) => console.log('[error] ', err));

server.listen(config.port, () => console.log(`Listening on ${config.port}`));
