//!Streams
/**
 * A stream is a sequence of data that is being moved from one point to another over time
 * Eg; A stream of data over the internet being moved from one computer to another
 * Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing it
 */ 

//!Buffer
/**
 * Node js can't control the pace at which the data arrives in stream
 * It can only decide when is the right time to send the data for processing
 * If there is data already processed or too little data to process, Node puts the data in a buffer
 * It is a small area of memory that Node  in the runtime to process a stream of data
 */