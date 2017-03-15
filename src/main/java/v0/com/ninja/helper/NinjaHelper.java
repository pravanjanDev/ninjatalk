package v0.com.ninja.helper;



import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import v0.com.ninja.datamodel.NinjaDAO;
import v0.com.ninja.jdo.Speaker;




public class NinjaHelper {
	private static final Logger logger = Logger.getLogger(NinjaHelper.class.getPackage().getName());
	
	public HashMap<String, Object> getSpeaker(String name ) {
		HashMap<String ,Object > resultMap = new HashMap<String , Object>();
		try{
			Speaker speaker = new NinjaDAO().getSpeaker(name);
			if(speaker != null){
				resultMap.put("status", true);
				resultMap.put("result", speaker);

			}
			else {
				resultMap.put("status", false);
				resultMap.put("result", speaker);
				resultMap.put("message", "No Speaker found with this name ");


			}
			
			
		}
		catch(Exception e){
			logger.log(Level.ERROR,"\n An error has occured while persisting : " + "\n", e);
		}
		
		return resultMap;
	}
	

}
