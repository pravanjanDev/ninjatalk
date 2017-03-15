package v0.com.ninja.datamodel;



import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

import v0.com.ninja.jdo.Speaker;
import v0.com.ninja.util.PersistenceManagerUtil;



public class NinjaDAO {
	private static final Logger logger = Logger.getLogger(NinjaDAO.class.getName());
	
	
	
	public Speaker getSpeaker(String name ) {
		PersistenceManager  pm = PersistenceManagerUtil.getPersistanceManager();

		Speaker speaker = null;
		try {
					
			Query query = pm.newQuery(Speaker.class,"name =='"+name+"'");
			List<Speaker> spList = (List<Speaker>) query.execute();
			logger.info("step list  *********** "+spList);

			spList = (List<Speaker>) pm.detachCopyAll(spList);
			if(spList != null && spList.size() > 0){
				speaker =  spList.get(0);
			}
			
		}
		catch(Exception e){
		
			logger.log(Level.ERROR,
					"\n An error has occured while persisting : " + "\n", e);
		}
		
		return speaker;
	}

	
	

	



}
