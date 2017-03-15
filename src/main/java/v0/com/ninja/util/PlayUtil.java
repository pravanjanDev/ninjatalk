package v0.com.ninja.util;



import java.io.BufferedReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.ResourceBundle;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;



public class PlayUtil {
	private static final Logger logger = Logger.getLogger(PlayUtil.class.getPackage().getName());
	
	public static ResourceBundle getResource(){
		return ResourceBundle.getBundle("util/application");
	}
	
	private static JsonFactory factory 		 = new JsonFactory();
	private static final ObjectMapper mapper = new ObjectMapper(factory);
	
	static{
		DateFormat df = new SimpleDateFormat("MMM dd, yyyy HH:mm:ss a");
		mapper.setDateFormat(df);
		mapper.configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES,false);
		mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
		mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_CONTROL_CHARS, true);
	}
	
	public static ObjectMapper getObjectMapper(){
		return mapper;
		
	}
	
	public static  String getPostParam(BufferedReader  reader){
		StringBuffer buffer = new StringBuffer();
		try{
			if(reader!=null){
				String lineItem = null;
				while( (lineItem = reader.readLine())   != null){
					buffer.append(lineItem);
					}
				}
			
		}
		catch(Exception e){
			logger.log(Level.ERROR, e.toString(),e);

		}
		return buffer.toString();
	}

	
		
	
		
		
	
	
	

}
