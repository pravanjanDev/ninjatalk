package v0.com.ninja.util;




import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;

public class PersistenceManagerUtil {

	static private PersistenceManagerFactory pmf = JDOHelper
			.getPersistenceManagerFactory("transactions-optional1");;

	public static PersistenceManager getPersistanceManager() {
		PersistenceManager persistenceManager = pmf.getPersistenceManager();
		return persistenceManager;
	}

}