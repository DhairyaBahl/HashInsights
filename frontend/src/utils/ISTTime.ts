const currentTime = new Date();

const currentOffset = currentTime.getTimezoneOffset();

const ISTOffset = 330;   // IST offset UTC +5:30 

const ISTTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Date(date.getTime() + (ISTOffset + currentOffset)*60000);
}

export default ISTTime;