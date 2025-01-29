import React from 'react';
import styles from './Notifications.module.css';

const Notifications = ({visible, setVisible}) => {

    const notificationsData = [
        {
            header: '[Google TI] Strategic Intelligence for Financial Institutions briefing',
            content: 'Join us next January 14th, 17:30 CEST for a LIVE session with one of our top Google Threat Intelligence researchers to gain valuable insights into the Financial Institutions context. The session will feature curated, real-time, and actionable strategic intelligence from Google Threat Intelligence.',
            time: '1 year ago',
        },
        {
            header: 'Strengthen Threat Detection with Google Threat Intelligence',
            content: 'Leverage Google Threat Intelligence to create powerful behavioral detections and stay ahead of evolving threats. Improve your ability doing research to detect ITW behaviors.',
            time: '1 year ago',
        },
        {
            header: 'Threat Hunting Open Session - Episode 5',
            content: 'Join us next January 11th for a new Threat Hunting live session where we will cover how to hunt through Sigma rules with the latest features we have added on macOS and Linux, and explore how Crowdsourced AI analysis compares to and complements the identified Sigma rule matches.',
            time: '1 year ago',
        },
        {
            header: 'Threat Hunting with VirusTotal - episode 4',
            content: 'Join us next August 30th for a new Threat Hunting live session where we will show you how to use our new YARA Netloc capabilities to monitor your infrastructure and assets against the most common threats.',
            time: '1 year ago',
        },
        {
            header: 'Security investigations with Splunk and VirusTotal',
            content: 'In our next webinar, we will show you the new VirusTotal Integration with Splunk to enrich your Splunk logs with fresh VT intelligence. Register here!',
            time: '2 years ago',
        },
        {
            header: 'Use the VirusTotal API like a Pro!',
            content: 'Want to level up your skills with VirusTotal\'s API? Join our session and learn how to use it like a pro! Register now!',
            time: '2 years ago',
        },
        {
            header: 'VT4Splunk is now out!',
            content: 'Introducing VT4Splunk, our official App for Splunk. See our blogpost here.',
            time: '2 years ago',
        },
        {
            header: 'Smoothly migrate from VirusTotal\'s API v2 to v3',
            content: 'Learn why, how and examples to smoothly migrate from VirusTotal\'s API v2 to v3 here.',
            time: '2 years ago',
        },
        {
            header: 'Join \'Threat Hunting with VirusTotal\' today!',
            content: 'Reminder, we are hosting our second \'Threat Hunting with VirusTotal\' live session. Don\'t miss the chance to improve your hunting capabilities.',
            time: '2 years ago',
        }
    ];
    const rootClasses = [styles.overlay];

    if (visible) rootClasses.push(styles.active);

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <section className={styles.notificationsContainer} onClick={e => e.stopPropagation()}>
                {notificationsData.map((item, index) =>
                    <article
                        key={index}
                        className={styles.content}>

                        <div>
                            <h4 className={styles.header}>{item.header}</h4>
                            <p className={styles.summary}>{item.content}</p>
                            <time className={styles.data}>{item.time}</time>
                        </div>

                        <div className={styles.paginationCircleContainer}>
                            <div className={styles.paginationCircle}></div>
                        </div>
                    </article>
                )}
            </section>
        </div>
    );
};

export default Notifications;